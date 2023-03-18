import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface initialStateProps {
  list: { id: string; name: string; image: string; input: string }[];
}

const initialState: initialStateProps = {
  list: [],
};

const addEditorListSlice = createSlice({
  name: 'editorList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    updateItem: (state, action) => {
      state.list = action.payload;
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    copyItem: (state, action) => {
      const newFormList = {
        image: action.payload.image,
        id: uuidv4(),
        name: action.payload.name,
        input: '',
      };
      state.list.push(newFormList);
    },
    arrowUpItem: (state, action) => {
      let index = state.list.findIndex((e) => e.id === action.payload);
      if (index > 0) {
        let el = state.list[index];
        state.list[index] = state.list[index - 1];
        state.list[index - 1] = el;
      }
    },
    arrowDownItem: (state, action) => {
      let index = state.list.findIndex((e) => e.id === action.payload);
      if (index !== -1 && index < state.list.length - 1) {
        let el = state.list[index];
        state.list[index] = state.list[index + 1];
        state.list[index + 1] = el;
      }
    },
  },
});

export const { addItem, deleteItem, copyItem, arrowUpItem, arrowDownItem, updateItem } =
  addEditorListSlice.actions;
export default addEditorListSlice.reducer;
