import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';



function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    const isServer = typeof window === 'undefined';

    const readValue = (): T => {
        if (isServer) return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) as T : initialValue;
        } catch (error) {
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    useEffect(() => {
        if (isServer) return;
        try {
            const valueToStore = JSON.stringify(storedValue);
            window.localStorage.setItem(key, valueToStore);
        } catch (error) {
            console.warn(`Ошибка записи в localStorage по ключу "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
