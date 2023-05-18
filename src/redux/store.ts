import {configureStore} from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
    reducer: {
        game: reducer
    }
});

export default store;
