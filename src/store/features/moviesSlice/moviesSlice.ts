import { createSlice } from "@reduxjs/toolkit";
import { movierProps } from "../../types";
const savedMovies = localStorage.getItem("movies");
const initialState: movierProps = {
    value: savedMovies ? JSON.parse(savedMovies) : [],
}


export const moviesSlice = createSlice({
    name: "MOVIES",
    initialState,
    reducers: {
        moviesPushdata: (state, action) => {
            if (Array.isArray(state.value)) {
                state.value.push(action.payload)
            }
        }
    }

})

export default moviesSlice.reducer