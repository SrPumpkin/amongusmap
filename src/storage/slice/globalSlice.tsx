import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index"

interface globalSettings {
    curentRound: number,
    chosenChar: null | string
}

const initialState: globalSettings = {
    curentRound: 0,
    chosenChar: null
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        updateRound: (state, data) => {
            state.curentRound = data.payload
        },
        updateChosenChar: (state, data) => {
            state.chosenChar = data.payload
        }
    }
})

export const { updateChosenChar, updateRound} = globalSlice.actions

export const selectglobal = (state: RootState) => state.global
export default globalSlice.reducer