import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

export function Header(){

    const {context, dispatch} = useContext(Context)

    const [width, setWidth] = useState(context.width)
    const [height, setHeight] = useState(context.width)

    return(
        <>
            <nav id="nav">
                <Link to='/'>Home</Link>
            </nav>
            <div className="size-controls">
                <div className="range-bars">
                    <label htmlFor="width">Width: {width}px</label>
                    <input type="range" name="width" min="100" max="500" step="50" value={width} onChange={(e) => {
                        e.preventDefault()
                        setWidth(e.target.value)
                    }}/>

                    <label htmlFor="height">Height: {height}px</label>
                    <input type="range" name="height" min="100" max="500" step="50" value={height} onChange={(e) => {
                        e.preventDefault()
                        setHeight(e.target.value)
                    }}/>
                </div>
                    
                <button onClick={() => {
                    dispatch({
                        type: "size/set",
                        payload: {height, width}
                    })
                }}>Confirm</button>
            </div>
        </>
    )
}