import './css/RoundPanel.css'

import React, {useState} from "react";

import RoundBtn from "./RoundBtn";
import {useAppDispatch, useAppSelector} from "../storage/hooks/hooks";
import {addRound} from "../storage/slice/roundsSlice";
import {updateRound} from "../storage/slice/globalSlice";

interface Props {
    isOpenClass: boolean
}

export default function RoundPanel({isOpenClass}: Props) {
    const rounds = useAppSelector(state => state.rounds)
    let [roundsCount, setRounds] = useState<number>(1)
    const [checkedRound, setCheckedRound] = useState<string>("round-0")

    const dispatch = useAppDispatch()

    const handleClick = () => {
        setRounds(++roundsCount)
        dispatch(addRound())
    }

    const handleChange = (event: any) => {
        // @ts-ignore
        let round: number = Number(/[0-9]/.exec(event.target.id)[0])

        dispatch(updateRound(round))
    }

    return(
        <div className={`rounds ${isOpenClass ? "active" : ""}`}>
            <div className="rounds-block">
                <div className="btn-block" onChange={handleChange}>
                    {[...Array(rounds.length).keys()].map(num => <RoundBtn num={num} key={num} changeFn={setCheckedRound} changeState={checkedRound}/>)}
                </div>
                <button className="btn-add-round" onClick={handleClick}>+</button>
            </div>
            <div className="blind"></div>
        </div>
    )
}