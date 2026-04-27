import { createSlice } from "@reduxjs/toolkit";
import { movierProps } from "../../types";

// 1. Initial state doim bo'sh bo'lishi kerak (Server xato bermasligi uchun)
const initialState: movierProps = {
    value: [],
}

export const moviesSlice = createSlice({
    name: "MOVIES",
    initialState,
    reducers: {
        // 2. localStorage dan ma'lumotni yuklash uchun alohida reducer
        hydrateMovies: (state) => {
            if (typeof window !== "undefined") {
                const saved = localStorage.getItem("movies");
                if (saved) {
                    state.value = JSON.parse(saved);
                }
            }
        },
        moviesPushdata: (state, action) => {
            if (Array.isArray(state.value)) {
                state.value.push(action.payload);
                // 3. Ma'lumot qo'shilganda localStorage ni yangilash
                localStorage.setItem("movies", JSON.stringify(state.value));
            }
        }
    }
})

export const { moviesPushdata, hydrateMovies } = moviesSlice.actions;
export default moviesSlice.reducer;