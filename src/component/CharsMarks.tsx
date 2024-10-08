import {DoubleSide, TextureLoader} from "three";
import {useLoader} from "@react-three/fiber";
import {useAppSelector} from "../storage/hooks/hooks";
import {useState} from "react";

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

interface Props {
    char: Char,
    round: any
}

export default function CharMarks({char, round}: Props) {
    const globalSettings = useAppSelector(state => state.settings)
    const globalParams = useAppSelector(state => state.global)
    const currentRound = useAppSelector(state => state.rounds[globalParams.curentRound])

    const scaleSize = globalSettings.width / 100

    let currentChar = char

    currentRound.characters.map((c: Char) => {
        if (c.color !== char.color) return;
        currentChar = c
    })

    const curOpacity = currentChar.exile ? 0.5 : 1.0

    const charTexture = useLoader(TextureLoader, `./src/svg/chars/${char.color}.svg`)
    const killedTexture = useLoader(TextureLoader, `./src/svg/chars/K${char.color}.svg`)
    const mapSize = {
        width: charTexture.source.data.width,
        height: charTexture.source.data.height,
        scale: scaleSize * .02
    }

    return(
        <>
            <group position={[currentChar.onMap.pos.x, -currentChar.onMap.pos.y, currentChar.onMap.pos.z]}>
                <mesh position={[0, 0, currentChar.killed ? -1 : 0]}>
                    <planeGeometry args={[177 * mapSize.scale, 150 * mapSize.scale]}/>
                    <meshBasicMaterial map={charTexture} side={DoubleSide} opacity={curOpacity} transparent={true}/>
                </mesh>
                <mesh position={[0, 0, currentChar.killed ? 0 : -1]}>
                    <planeGeometry args={[177 * mapSize.scale, 150 * mapSize.scale]}/>
                    <meshBasicMaterial map={killedTexture} side={DoubleSide} opacity={curOpacity} transparent={true}/>
                </mesh>
            </group>

        </>
    )
}