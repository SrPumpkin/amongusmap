import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index"

interface InitialState {
    width: number,
    height: number
}

const initialState: InitialState = {
    width: window.innerWidth,
    height: window.innerHeight
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        updateSettings: (state, data) => {
            state.width = data.payload.width
            state.height = data.payload.height
        }
    }
})

export const { updateSettings } = settingsSlice.actions
export const selectSettings = (state: RootState) => state.settings
export default settingsSlice.reducer