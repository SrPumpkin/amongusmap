import {configureStore} from "@reduxjs/toolkit";
import charSlice from "./charSlice";
import roundsSlice from "./roundsSlice";
import settingsSlice from "./settingsSlice";
import globalSlice from "./globalSlice";

export const storage = configureStore({
    reducer: {
        global: globalSlice,
        characters: charSlice,
        rounds: roundsSlice,
        settings: settingsSlice
    }
})

export type RootState = ReturnType<typeof storage.getState>
export type AppDispatch = typeof storage.dispatch
export type AppStore = typeof storage