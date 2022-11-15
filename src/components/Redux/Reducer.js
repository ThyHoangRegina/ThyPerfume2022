import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export const Filterslice = createSlice({
    name: 'filter',
    initialState: {
        season: "All",
        searchText: ""
    },
    reducers: {
        bySeason: (state, action) => {
         state.season = action.payload;
        },
        bySearch: (state, action) => {
         state.searchText = action.payload;
        }
    }
})

export const Cartslice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        addItem: (state, action)=>{
            state.push({img: action.payload.img, name:action.payload.name, price: action.payload.price})
        },
        removeItem: (state, action)=>{
            return state = state.filter((element)=>{
                return element.name !== action.payload.name
            })
        }
    }
}
)

export const Cartmoneyslice = createSlice({
    name: 'cartmoney',
    initialState: 0,
    reducers: {
        addMoney: (state,action)=>{
            return state = state + action.payload;
        },
        minusMoney: (state, action) =>{
            return state = state - action.payload;
        }
    }
})