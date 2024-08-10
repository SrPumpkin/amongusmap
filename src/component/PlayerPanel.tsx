import './css/PlayerPanel.css'

import Char from "./Char";
import {useAppSelector} from "../storage/hooks/hooks";

interface Props {
    isOpenClass: boolean
}

export default function PlayerPanel({isOpenClass}: Props) {
    const globalParams = useAppSelector(state => state.global)
    const currentRound = useAppSelector(state => state.rounds[globalParams.curentRound])

    return(
        <div className={`players ${isOpenClass ? "active" : ""}`}>
            <div className="players-block">
                {currentRound.characters.map(char => <Char data={char} curRound={globalParams.curentRound} globalParams={globalParams} key={char.color} />)}
            </div>
            <div className="blind"></div>
        </div>
    )
}