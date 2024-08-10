import {configureStore} from "@reduxjs/toolkit";
import charSlice from "./slice/charSlice";
import roundsSlice from "./slice/roundsSlice";
import settingsSlice from "./slice/settingsSlice";
import globalSlice from "./slice/globalSlice";

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