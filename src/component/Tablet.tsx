import "./css/Tablet.css"

import CharSettings from "./CharSettings";
import {useState} from "react";

import {useAppSelector} from "../storage/hooks/hooks";

interface Props {
    isOpenClass: boolean
}

export default function Tablet({isOpenClass}: Props) {
    const [menuNavState, setMenuNavState] = useState<string>("settings")

    const characters = useAppSelector(state => state.characters)

    const handleClick = (event: any) => {
        setMenuNavState(event.target.className)
    }

    return(
        <>
            <div className={`tablet ${menuNavState} ${isOpenClass ? "active" : ""}`}>
                <ul className="tablet-menu">
                    <li className="settings" onClick={handleClick}></li>
                    <li className="support" onClick={handleClick}></li>
                </ul>
                <div className="tablet-screen">
                    <div className="support">
                        <h3>Help</h3>
                        <div className="faq-block">
                            <div className="block_info">
                                <span>Faq.txt</span>
                            </div>
                            <div className="faq-grid">
                                <span>Before you start using the map, you need to select the colors of the characters that play in your lobby. You can do this by clicking on the "<i style={{color: "orange"}}>Menu</i>" <i className="icon-menu"></i> button and going to the "<i style={{color: "orange"}}>Settings</i>" <i className="icon-settings"></i> subsection and selecting the desired colors, also if the color of one of the players has changed, you can go to this section again and change it.</span>
                                <span>In order to place a character on the map, you must go to the "<i style={{color: "orange"}}>Characters</i>" <i className="icon-character"></i> section and click on the character icon, a submenu will open where you need to click on the "<i style={{color: "orange"}}>Mark</i>" <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg> sign and click on the place on the map where you need to place the mark, to remove the mark, you need to click on the icon again.</span>
                                <span>To mark a character as suspicious, click on the following "<i style={{color: "orange"}}>Suspect</i>" icon <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48l-59.9 0C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4l-59.9 0c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208l-12.4 0c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2L168 224c-22.1 0-40-17.9-40-40l0-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4l0 14.4c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"></path></svg> , also to the left of the icon there is a counter of how many times the astronaut was under suspicion.</span>
                                <span>If you banished an astronaut click on the 3rd icon "<i style={{color: "orange"}}>Banished</i>" <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"></path></svg>. If you made a mistake, you can disable this state by clicking again.</span>
                                <span>Fifth icon "<i style={{color: "orange"}}>Murder</i>" <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M368 128c0 44.4-25.4 83.5-64 106.4l0 21.6c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-21.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6C1.9 308.7-4.5 289.5 3.4 273.7z"></path></svg> will allow you to mark the character as killed, the icon on the map will also change to the corresponding one. If you made a mistake, you can disable this state by clicking again.</span>
                                <span>To change rounds, click on the "<i style={{color: "orange"}}>Rounds</i>" <i className="icon-round"></i> button in the top panel and in the window that appears, click on the corresponding round, all marks placed on the map are saved in the corresponding rounds, going through which you can remember who was where in all the rounds.</span>
                                <span>To play again, simply click the "<i style={{color: "orange"}}>Reset Progress</i>" <i className="icon-refresh"></i> button.</span>                            </div>
                        </div>
                    </div>
                    <div className="settings">
                        <div className="chars">
                            <h3 className="title">Chose characters</h3>
                            <div className="chars-block">
                                {characters.map(char => <CharSettings color={char.color} key={char.color} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tablet_blind"></div>
            </div>
        </>
    )
}