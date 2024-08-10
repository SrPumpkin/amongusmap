
interface Char {
    type: string,
    chosen: boolean,
    onMap: boolean,
    suspect: number,
    exile: boolean,
    killed: boolean
}

export const char = (state = [], action: Char) => {
    switch (action.type) {
        case "ADD_CHAR" :
            console.log(state)
            return [
                ...state,
                {
                    chosen: false,
                    onMap: false,
                    suspect: 0,
                    exile: false,
                    killed: false
                }
            ]
        default:
            return state
    }
}