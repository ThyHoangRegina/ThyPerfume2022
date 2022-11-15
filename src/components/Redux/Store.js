import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import { Filterslice, Cartslice, Cartmoneyslice } from './Reducer.js';

const store = configureStore({
    reducer: {
        filter: Filterslice.reducer,
        carts: Cartslice.reducer,
        cartmoney: Cartmoneyslice.reducer
    }
});

export default store;
