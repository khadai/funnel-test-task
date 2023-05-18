import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
    reducer: {
        funnel: reducer,
    },
});

export default store;
