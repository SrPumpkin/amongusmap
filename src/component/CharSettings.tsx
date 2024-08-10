import './css/CharSettings.css'
import {useRef, useState} from "react";
import {useAppDispatch} from "../storage/hooks/hooks";
import {addChar, removeChar} from "../storage/slice/roundsSlice";

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
interface CharSettings {
    color: string
}

export default function CharSettings({color}: CharSettings) {
    const [navClassState, setClassState] = useState<string>("")
    const dispatch = useAppDispatch()
    const char = useRef<Char>({
        color: color,
        chosen: true,
        onMap: {
            onSet: false,
            pos: {x: 0, y: 0, z: -1}
        },
        suspect: 0,
        exile: false,
        killed: false
    })

    const handleClickChar = () => {
        setClassState(props => props === "checked" ? "" : "checked")

        navClassState === "checked" ? dispatch(removeChar(char.current)) : dispatch(addChar(char.current))
    }

    return(
        <div data-color={color} className={`char-settings ${navClassState}`}>
            <div className="char-icon" onClick={handleClickChar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.28 406.68">
                    <g>
                        <path className="color" d="M80.6,278l88.48,62,102,11,107,4,90.79-47.83S494.08,25,281.08,10C170.08,1,82.12,157.94,80.6,278Z"></path>
                        <path className="color dark" d="M465.08,256l-7,110s-142,52-380,1c0,0,5-51,14-116C88.08,266,359.34,434.4,465.08,256Z"></path>
                        <path className="cls-3" d="M73.08,370s1-353,196-360c11,0,237-8,195,360C464.08,370,312.08,430,73.08,370Z"></path>
                        <path className="cls-4" d="M221.58,138.51v62s105,90,194-4l-6-68S277.58,116.51,221.58,138.51Z"></path>
                        <path className="cls-5" d="M217.58,183.51v70s119,27,202-5l-4-63S321.58,282.51,217.58,183.51Z"></path>
                        <path className="cls-6" d="M224.08,142s-12,81,0,115c0,0,192,8,196-14,0,0,6-32-10-114C410.08,129,300.08,114,224.08,142Z"></path>
                        <path className="color dark" d="M52.08,159s-38,10-42,197c0,0,19,21,63,14,0,0,5.21-114.57,32.1-201.28C105.08,169,77.08,143,52.08,159Z"></path>
                        <path className="color" d="M17.05,255.37s9.53,33.14,37.53,14.14c0,0,11-78,44-103-.18.45-45.23-30.62-59.11,6.19S21.51,211.22,17.05,255.37Z"></path>
                        <path className="cls-3" d="M52.08,159s-38,10-42,197c0,0,19,21,63,14,0,0,5.21-114.57,32.1-201.28C105.08,169,77.08,143,52.08,159Z"></path>
                        <path className="cls-7" d="M266.58,162.51c10.62,1.41,25.28,1.53,33.25-6.75,5.35-5.57-3.12-14.07-8.49-8.49s-17.7,4.18-24.76,3.24c-3.24-.43-6,3.07-6,6,0,3.6,2.8,5.58,6,6Z"></path>
                        <path className="cls-7" d="M387.08,151c-8.08.91-16.25,1.33-24.38,1.49-14,.28-28.59.05-42-4.27-7.37-2.37-10.53,9.21-3.19,11.57,14,4.5,29.38,4.95,44,4.72,8.54-.13,17.13-.55,25.62-1.51,7.59-.85,7.68-12.86,0-12Z"></path>
                    </g>
                </svg>
            </div>
        </div>
    )
}