import './css/Menu.css'
import React, {useState} from "react";


interface Props {
    tabletOpen: React.Dispatch<React.SetStateAction<boolean>>,
    playerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    roundOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Menu({tabletOpen, playerOpen, roundOpen}: Props) {
    const [tabletBtn, setStateTablet] = useState(false)
    const [playerBtn, setStatePlayer] = useState(false)
    const [roundBtn, setStateRound] = useState(false)

    const handleRound = () => {
        roundOpen(!roundBtn)
        setStateRound(!roundBtn)
    }

    const handlePlayer = () => {
        playerOpen(!playerBtn)
        setStatePlayer(!playerBtn)
    }

    const handleTablet = () => {
        tabletOpen(!tabletBtn)
        setStateTablet(!tabletBtn)
    }

    const handleRefresh = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return(
        <ul className="menu-block">
            <li className="btn">
                <button onClick={handleRound} className={`round ${roundBtn ? 'active' : ''}`}></button>
            </li>
            <li className="btn">
                <button onClick={handlePlayer} className={`player ${playerBtn ? 'active' : ''}`}></button>
            </li>
            <li className="btn">
                <button onClick={handleTablet} className={`menu ${tabletBtn ? 'active' : ''}`}></button>
            </li>
            <li className="btn">
                <button onClick={handleRefresh} className="refresh"></button>
            </li>
        </ul>
    )
}