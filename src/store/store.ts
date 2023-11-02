import { configureStore } from '@reduxjs/toolkit';
import { contactUs } from './contactUs';
import { ui } from './ui';

const store = configureStore({
  reducer: {
    contactUs,
    ui,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
