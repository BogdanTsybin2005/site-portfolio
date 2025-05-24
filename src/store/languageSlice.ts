import { createSlice } from '@reduxjs/toolkit';



type LanguageState = 'EN' | 'RU';

const initialState: LanguageState = (localStorage.getItem('language') as LanguageState) || 'EN';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const newLang = state === 'EN' ? 'RU' : 'EN';
      localStorage.setItem('language', newLang);
      return newLang;
    },
    setLanguage: (_, action) => {
      localStorage.setItem('language', action.payload);
      return action.payload;
    }
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
