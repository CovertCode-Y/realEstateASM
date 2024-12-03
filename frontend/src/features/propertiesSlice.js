import { createSlice } from '@reduxjs/toolkit';

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: [],
  reducers: {
    addProperty: (state, action) => {
      state.push(action.payload);
    },
    removeProperty: (state, action) => {
      return state.filter(property => property.id !== action.payload);
    },
  },
});

export const { addProperty, removeProperty } = propertiesSlice.actions;
export default propertiesSlice.reducer;
