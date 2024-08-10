import {DoubleSide, TextureLoader} from "three";
import {OrthographicCamera} from "@react-three/drei";
import {OrbitControlsNew} from "../component/OrbitControlsNew/OrbitControlsNew";
import * as THREE from "three";
import {Canvas, useLoader} from "@react-three/fiber";

import CharMarks from "../component/CharsMarks";

import {useAppDispatch, useAppSelector} from "../storage/hooks/hooks";
import {updateChar} from "../storage/slice/roundsSlice";
import {updateChosenChar} from "../storage/slice/globalSlice";

export default function CanvasBlock() {
    const defaultChars = useAppSelector(state => state.characters)
    const globalSettings = useAppSelector(state => state.settings)
    const globalParams = useAppSelector(state => state.global)
    const currentRound = useAppSelector(state => state.rounds[globalParams.curentRound])

    const dispatch = useAppDispatch()

    const mapTexture = useLoader(TextureLoader, "./src/img/the-skeld.png")
    const mapSize = {
        width: mapTexture.source.data.width,
        height: mapTexture.source.data.height,
        scale: 1
    }

    const handleClick = (event: any) => {
        if (globalParams.chosenChar === null) return;

        dispatch(updateChar({
            round: globalParams.curentRound,
            color: globalParams.chosenChar,
            type: "onMap",
            subject: {
                onSet: false,
                pos: {x: event.point.x, y: -event.point.y, z: 0}
            }
        }))

        dispatch(updateChosenChar(null))
    }

    return(
        <Canvas style={{background: "#000000"}}>
            <group>
                <directionalLight intensity={0} position={[0, 0, 1]} color="white"/>
                <mesh onClick={handleClick} >
                    <planeGeometry args={[mapSize.width / (mapSize.width / globalSettings.width), mapSize.height / (mapSize.width / globalSettings.width)]}/>
                    <meshBasicMaterial map={mapTexture} side={DoubleSide} transparent={true}/>
                </mesh>
                {defaultChars.map((char) => <CharMarks char={char} round={currentRound} key={char.color}/>)}
                <OrthographicCamera makeDefault position={[0, 0, 1]} left={globalSettings.width / - 2} right={globalSettings.width / 2} top={globalSettings.height / 2} bottom={globalSettings.height / - 2} near={1} far={1000}/>
                <OrbitControlsNew enableRotate={false} mouseButtons={{
                    LEFT: THREE.MOUSE.PAN,
                    MIDDLE: THREE.MOUSE.DOLLY,
                    RIGHT: THREE.MOUSE.ROTATE
                }} touches={{
                    ONE: THREE.TOUCH.PAN,
                    TWO: THREE.TOUCH.DOLLY_PAN
                }} zoomToCursor={true} minZoom={1} />
            </group>
        </Canvas>
    )
}