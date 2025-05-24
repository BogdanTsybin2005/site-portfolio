import { createSlice } from '@reduxjs/toolkit';



interface BurgerState {
  isOpen: boolean;
}

const initialState: BurgerState = {
  isOpen: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggleBurger: (state) => {
      state.isOpen = !state.isOpen;
      document.body.style.overflow = state.isOpen ? 'hidden' : 'auto';
    },
    closeBurger: (state) => {
      state.isOpen = false;
      document.body.style.overflow = 'auto';
    },
    openBurger: (state) => {
      state.isOpen = true;
      document.body.style.overflow = 'hidden';
    },
  },
});

export const { toggleBurger, closeBurger, openBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
