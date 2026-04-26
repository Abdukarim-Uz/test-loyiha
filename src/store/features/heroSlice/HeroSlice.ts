"use client";

import { createSlice } from "@reduxjs/toolkit";
import { hero_film } from "../../types";

const savedHeroMovies = localStorage.getItem('hero')


const initialState: hero_film = {
    value: savedHeroMovies ? JSON.parse(savedHeroMovies) : []
}

export const heroSlice = createSlice({
    name: "HERO_MOVIES",
    initialState,
    reducers: {
        heroMoviesPush: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export default heroSlice.reducer