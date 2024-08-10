import React, {useRef} from "react";

interface Props {
    num: number,
    changeFn: React.Dispatch<React.SetStateAction<string>>,
    changeState: string
}

export default function RoundBtn({num, changeFn, changeState}: Props) {
    const roundClassName = useRef<string>(`round-${num}`)

    const handleChange = () => {
        changeFn(`round-${num}`)
    }

    return(
        <div className={`btn-round ${changeState === roundClassName.current ? "checked" : ""}`}>
            <input type="radio" id={`round-${num}`} name="round" onChange={handleChange} checked={changeState === roundClassName.current}/>
            <label htmlFor={`round-${num}`}>{num + 1}</label>
        </div>
    )
}