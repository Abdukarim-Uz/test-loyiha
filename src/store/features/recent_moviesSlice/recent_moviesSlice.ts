import { createSlice } from "@reduxjs/toolkit";
import { recent_moviesProps } from "../../types";

const initialState: recent_moviesProps = {
    value: [
        { id: 1, title: 'Dune: Part Two', category: 'Fantastika', status: 'Active', date: '2024-03-20' },
        { id: 2, title: 'Dune: Part Two', category: 'Fantastika', status: 'Active', date: '2024-03-20' },
        { id: 3, title: 'Dune: Part Two', category: 'Fantastika', status: 'Active', date: '2024-03-20' },
        { id: 4, title: 'Dune: Part Two', category: 'Fantastika', status: 'Active', date: '2024-03-20' },
    ]
}

export const recent_moviesSlice = createSlice({
    name: "recent_moviesSlice",
    initialState,
    reducers: {
        recent_moviesPush: (state, action) => {
            state.value.push(action.payload)
        }
    }

})

export default recent_moviesSlice.reducer