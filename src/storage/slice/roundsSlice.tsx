import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index"
import Char from "../../component/Char";

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

interface Characters {
    characters: Array<Char>
}

const initialState: Array<Characters> = [
    {characters: []}
]

export const roundsSlice = createSlice({
    name: "rounds",
    initialState,
    reducers: {
        addChar: (state, data) => {
            state.map((round) => {
                round.characters.push(data.payload)
                return round;
            })
        },
        removeChar: (state, data) => {
            state.map((round, roundIndex) => {
                let check: null | number = null

                round.characters.forEach((char, charIndex) => {
                    if (char.color === data.payload.color) check = charIndex
                })

                if (check !== null) round.characters.splice(check, 1)
            })
        },
        updateChar: (state, data) => {
            state[data.payload.round].characters.map((char: any) => {
                if (char.color === data.payload.color) {
                    char[data.payload.type] = data.payload.subject
                }
            })
        },
        addRound: (state) => {
            let newCharacters = state[state.length - 1].characters.map((char: any) => {
                return {
                    color: char.color,
                    chosen: char.chosen,
                    onMap: {
                        onSet: false,
                        pos: {x: 0, y: 0, z: -1}
                    },
                    suspect: char.suspect,
                    exile: char.exile,
                    killed: char.killed
                }
            })

            state.push({characters: newCharacters})
        }
    }
})

export const { addChar, addRound, removeChar, updateChar } = roundsSlice.actions

export const selectRounds = (state: RootState) => state.characters
export default roundsSlice.reducer