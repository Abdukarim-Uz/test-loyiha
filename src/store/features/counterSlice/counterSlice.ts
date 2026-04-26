"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value:
    { id: number, label: string, value: string, change: string, icon: string }[],
}

const initialState: CounterState = {
    value: [
        { id: 1, label: 'Jami foydalanuvchilar', value: '24,512', change: '+12%', icon: '👥' },
        { id: 2, label: 'Ko\'rilgan soatlar', value: '128.4k', change: '+8%', icon: '🕒' },
        { id: 3, label: 'Obunachilar', value: '3,105', change: '+18%', icon: '💎' },
        { id: 4, label: 'Daromad', value: '$12,400', change: '+5%', icon: '💰' },
    ]
}
export const counterSlice = createSlice({
    name: 'STATS',
    initialState,
    reducers: {
        dataPush: (state, action) => {
            state.value.push(action.payload)
        }
    }
})


export default counterSlice.reducer;