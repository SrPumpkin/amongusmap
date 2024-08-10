import {type} from "os";

interface Char {
    chosen: boolean,
    onMap: boolean,
    suspect: number,
    exile: boolean,
    killed: boolean
}

export const addChar = ({chosen, onMap, suspect, exile, killed}: Char) => ({
    type: 'ADD_CHAR',
    chosen,
    onMap,
    suspect,
    exile,
    killed
})