import Menu from "../component/Menu";
import Tablet from "../component/Tablet";
import PlayerPanel from "../component/PlayerPanel";
import RoundPanel from "../component/RoundPanel";
import {useState} from "react";

export default function Interface() {
    const [tabletState, setTabletState] = useState<boolean>(false)
    const [playerState, setPlayerState] = useState<boolean>(false)
    const [roundState, setRoundState] = useState<boolean>(false)

    return(
        <>
            <Menu tabletOpen={setTabletState} playerOpen={setPlayerState} roundOpen={setRoundState}/>
            <Tablet isOpenClass={tabletState} />
            <PlayerPanel isOpenClass={playerState} />
            <RoundPanel isOpenClass={roundState} />
        </>
    )
}