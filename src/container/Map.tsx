import CanvasBlock from "./CanvasBlock";
import OrientationBlind from "../component/OrientationBlind"
import Interface from "./Interface";

export default function Map() {

    return(
        <>
            <CanvasBlock />
            <Interface />
            <OrientationBlind />
        </>
    )
}