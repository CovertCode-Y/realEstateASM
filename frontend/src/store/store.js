import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../features/propertiesSlice';

const store = configureStore({
  reducer: {
    properties: propertiesReducer, // זהו ה-reducer הראשי של האפליקציה
  },
});

export default store;
