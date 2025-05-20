import { useState, useEffect } from "react";



const useWindowWidth = (): number => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    
    useEffect(() => {
        const handleWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowWidth);
        handleWindowWidth();
        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }
    }, []);

    return windowWidth;
}


export default useWindowWidth;
