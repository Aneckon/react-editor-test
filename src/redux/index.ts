import { configureStore } from '@reduxjs/toolkit';
import addEditorListReducer from './slice/addEditorlist';

export const store = configureStore({
  reducer: { addEditorListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
