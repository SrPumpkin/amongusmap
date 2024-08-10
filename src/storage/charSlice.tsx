import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index"

interface LocationPos {
    x: number,
    y: number,
    z: number
}

interface onMap {
    onSet: boolean,
    pos: LocationPos
}

interface Char {
    color: string,
    chosen: boolean,
    onMap: onMap,
    suspect: number,
    exile: boolean,
    killed: boolean
}

const initialState: Array<Char> = [
    {
        color: "Red",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Blue",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Green",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Pink",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Orange",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Yellow",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Black",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "White",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Purple",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Brown",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Cyan",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Lime",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Maroon",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Rose",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Banana",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Gray",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Tan",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    },
    {
        color: "Coral",
        chosen: false,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    }
]

export const charSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {}
})

export const selectСharacters = (state: RootState) => state.characters
export default charSlice.reducer