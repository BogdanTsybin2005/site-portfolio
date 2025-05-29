import { createSlice, type PayloadAction } from '@reduxjs/toolkit';



export type LanguageState = 'EN' | 'RU';

const getInitialLanguage = (): LanguageState => {
  if (typeof window === 'undefined') return 'EN';
  const storedLang = localStorage.getItem('language');
  return storedLang === 'RU' ? 'RU' : 'EN';
};

const initialState: LanguageState = getInitialLanguage();

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const newLang = state === 'EN' ? 'RU' : 'EN';
      localStorage.setItem('language', newLang);
      return newLang;
    },
    setLanguage: (_, action: PayloadAction<LanguageState>) => {
      localStorage.setItem('language', action.payload);
      return action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
