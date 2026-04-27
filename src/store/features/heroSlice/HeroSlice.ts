"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hero_film } from "../../types";

// 1. Dastlabki holat doim bo'sh massiv bo'lishi kerak
const initialState: hero_film = {
    value: []
}

export const heroSlice = createSlice({
    name: "HERO_MOVIES",
    initialState,
    reducers: {
        // 2. Ma'lumotni brauzer yuklangandan keyin localStorage dan o'qib olish
        hydrateHero: (state) => {
            if (typeof window !== "undefined") {
                const saved = localStorage.getItem('hero');
                if (saved) {
                    state.value = JSON.parse(saved);
                }
            }
        },
        heroMoviesPush: (state, action: PayloadAction<any>) => {
            state.value.push(action.payload);

            // 3. Yangi ma'lumot qo'shilganda localStorage ni ham yangilash
            if (typeof window !== "undefined") {
                localStorage.setItem('hero', JSON.stringify(state.value));
            }
        }
    }
})

// Reducerlarni export qilishni unutmang
export const { heroMoviesPush, hydrateHero } = heroSlice.actions;
export default heroSlice.reducer;