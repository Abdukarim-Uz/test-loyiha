"use client";

import { configureStore } from "@reduxjs/toolkit";


import counterSlice from "./features/counterSlice/counterSlice"

import heroMovieslice from "./features/heroSlice/HeroSlice"

import moviesSlice from "./features/moviesSlice/moviesSlice"

import recent_moviesslice from "./features/recent_moviesSlice/recent_moviesSlice"

export const store = configureStore({
    reducer: {
        STATS: counterSlice,
        HERO_MOVIES: heroMovieslice,
        MOVIES: moviesSlice,
        recent_moviesSlice:recent_moviesslice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch