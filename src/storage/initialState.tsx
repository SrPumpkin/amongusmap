

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
    characters: {
        Red: Char,
        Blue: Char,
        Green: Char,
        Pink: Char,
        Orange: Char,
        Yellow: Char,
        Black: Char,
        White: Char,
        Purple: Char,
        Brown: Char,
        Cyan: Char,
        Lime: Char,
        Maroon: Char,
        Rose: Char,
        Banana: Char,
        Gray: Char,
        Tan: Char,
        Coral: Char
    }
}

interface MapStorage {
    characters: Array<Char>,
    rounds: Array<Characters>,
    settings: Object
}

const initialState: MapStorage = {
    characters: [],
    rounds: [],
    settings: {}
}

export default initialState