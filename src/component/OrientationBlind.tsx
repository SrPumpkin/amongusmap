import "./css/OrientationBlind.css"

import {useOrientation} from "react-use";

export default function OrientationBlind() {
    const orientation = useOrientation()

    return(
        <div className={`orientation-blind ${orientation.type === "portrait-primary" ? "active" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"/></svg>
            <span>Change device orientation</span>
            <div className="blind"></div>
        </div>
    )
}