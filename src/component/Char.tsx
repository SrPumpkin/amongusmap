import './css/Char.css'
import {useState} from "react";

import SuspectBtn from "./SuspectBtn";
import {useAppDispatch} from "../storage/hooks/hooks";
import {updateChar} from "../storage/slice/roundsSlice";
import {updateChosenChar} from "../storage/slice/globalSlice"

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

interface globalSettings {
    curentRound: number,
    chosenChar: null | string
}

interface Props {
    data: Char,
    curRound: number,
    globalParams: globalSettings
}

export default function Char({data, curRound, globalParams}: Props) {
    const [navClassState, setClassState] = useState<string>("")

    const dispatch = useAppDispatch()
    
    const handleClickChar = () => {
        setClassState(props => props === "active" ? "" : "active")
    }

    const handleMarker = () => {
        dispatch(updateChosenChar(data.color))
    }

    const handleSus = (susCont: number) => {
        dispatch(updateChar({
            round: curRound,
            color: data.color,
            type: "suspect",
            subject: susCont
        }))
    }

    const handleExile = () => {
        dispatch(updateChar({
            round: curRound,
            color: data.color,
            type: "exile",
            subject: !data.exile
        }))
    }

    const handleKilled = () => {
        dispatch(updateChar({
            round: curRound,
            color: data.color,
            type: "killed",
            subject: !data.killed
        }))
    }

    return(
        <div data-color={data.color} className={`char ${data.suspect > 0 ? "suspect" : ""} ${data.exile ? "exile" : ""} ${data.killed ? "killed" : ""}`}>
            <div className="char-icon" onClick={handleClickChar}>
                <svg className="standart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.28 406.68">
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
                <svg className="kill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.94 169.99">
                    <g>
                        <path className="color dark" d="M5.06,97.57s13-42,80-43c24.1-.36,36.93,3.56,46,9,10,6,23,35,15,65-2.71,10.16-9.6,17.89-18,26-29,28-87,4-87,4S-12.94,141.57,5.06,97.57Z"/>
                        <path className="cls-3" d="M5.17,97.91s13-42,80-43c24.11-.36,36.94,3.56,46,9,10,6,23,35,15,65-2.71,10.17-9.59,17.89-18,26-29,28-87,4-87,4S-12.83,141.91,5.17,97.91Z"/>
                        <path className="blood" d="M29.75,112.8S19.93,91.42,59.93,79.42c0,0,48-10,60,15,0,0,13,18-2,45S41.57,142.18,29.75,112.8Z"/>
                        <path className="cls-3" d="M30,113.29S20.17,91.91,60.17,79.91c0,0,48-10,60,15,0,0,13,18-2,45S41.81,142.68,30,113.29Z"/>
                        <path className="white" d="M48.93,112.41s12.64-17.54,34-13c0,0,14,7,8,21-1.88,4.4-7.32,5.61-10.84,5.92a.92.92,0,0,0-.44,1.68c4.49,3,12.47,10.29,7.28,21.4-7,15-16,14-16,14s-16.64,6.46-28-8c-11-14,11-28,11-28s-15,3-17,20c-.7,6-27,2-24-16s24-19,24-19Z"/>
                        <path className="cls-3" d="M49.17,111.91s12.64-17.54,34-13c0,0,14,7,8,21-1.88,4.4-7.32,5.61-10.84,5.92a.92.92,0,0,0-.44,1.68c4.49,3,12.47,10.29,7.28,21.4-7,15-16,14-16,14s-16.64,6.46-28-8c-11-14,11-28,11-28s-15,3-17,20c-.7,6-27,2-24-16s24-19,24-19Z"/>
                        <path className="color dark" d="M149.25,42.69c10.28-1.37,40.78-1.61,29.57,46.25a22.24,22.24,0,0,1-2.55,6.27c-4,6.68-18.32,23.32-29.28,35.05,0,0,14-46-18-70,0,0,4.86-9.71,13.85-15.3A16.11,16.11,0,0,1,149.25,42.69Z"/>
                        <path className="cls-3" d="M148.43,43.33C158.72,42,189.21,41.73,178,89.59a22.24,22.24,0,0,1-2.55,6.27c-4,6.68-18.32,23.31-29.28,35.05,0,0,14-46-18-70,0,0,4.86-9.71,13.85-15.3A16.28,16.28,0,0,1,148.43,43.33Z"/>
                        <path className="color white" d="M14.67,44.41s-3.4-16.24,41-35,73-.57,74.5,1.71c.6.91,1.42,2.24,2.21,3.51a5.93,5.93,0,0,1-.64,7.06L117.67,37.41l-51,3-21,7-31,4Z"/>
                        <path className="color dark" d="M116.17,32.91s-51.51-4.06-78.5,7.5c-14,6-21.31,0-21-5,.12-.45-6.5,30.5.5,44.5,0,0,36.5-40.5,109-19,0,0,25.5-17.5,12-41.24,0,.24.9-.74-2.51-3.26S119.17,23.91,116.17,32.91Z"/>
                        <path className="cls-3" d="M17.32,79.43s-8.15-25.52-.15-44.52c0,0,19-23,51-30s51-2,58,4c0,0,14,7.46,15,18.77a20.42,20.42,0,0,0,.43,2.58,22.09,22.09,0,0,1-2.38,15.65,55.4,55.4,0,0,1-13,15S70.47,37,17.32,79.43Z"/>
                    </g>
                </svg>
            </div>
            <div className={`char-nav ${navClassState}`}>
                <button className={`marker ${data.onMap.pos.z === 0 ? "active" : ""} ${globalParams.chosenChar === data.color ? "marked" : ""}`} onClick={handleMarker}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                </button>
                <SuspectBtn sus={data.suspect} updateChar={handleSus}/>
                <button className="killed" onClick={handleKilled}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M368 128c0 44.4-25.4 83.5-64 106.4l0 21.6c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6C1.9 308.7-4.5 289.5 3.4 273.7z"/></svg>
                </button>
                <button className="exile" onClick={handleExile}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
                </button>
            </div>
        </div>
    )
}