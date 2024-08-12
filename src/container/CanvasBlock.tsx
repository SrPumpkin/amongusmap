import {DoubleSide, TextureLoader} from "three";
import {OrthographicCamera} from "@react-three/drei";
import {OrbitControlsNew} from "../component/OrbitControlsNew/OrbitControlsNew";
import * as THREE from "three";
import {Canvas, useLoader} from "@react-three/fiber";

import CharMarks from "../component/CharsMarks";
import PlaneStars from "../component/PlaneStars";
import Engine from "../component/Engine";

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

    const adaptiveSize = globalSettings.height / 1000

    return(
        <Canvas style={{background: "#000000"}}>
            <PlaneStars />
            <group>
                <directionalLight intensity={0} position={[0, 0, 1]} color="white"/>
                <Engine pos={{x: -71, y: 22}} texture="./src/img/sprites/smallEngine.png" size={0.35}/>
                <Engine pos={{x: -75.2, y: 15}} texture="./src/img/sprites/smallEngine.png" size={0.35}/>
                <Engine pos={{x: -83, y: -1}} texture="./src/img/sprites/bigEngine.png" size={0.39}/>
                <Engine pos={{x: -75.5, y: -20}} texture="./src/img/sprites/smallEngine.png" size={0.35}/>
                <Engine pos={{x: -71, y: -30}} texture="./src/img/sprites/smallEngine.png" size={0.35}/>
                <mesh onClick={handleClick} >
                    <planeGeometry args={[mapSize.width * adaptiveSize * 0.43, mapSize.height  * adaptiveSize * 0.43]}/>
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