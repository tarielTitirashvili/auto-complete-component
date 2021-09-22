import React from "react"
import css from "./hint.module.css"

export default function Hint(props) {

    return(
        <div className = {css.hint} onClick = {()=>props.setText(props.title)}>
            {props.title}
        </div>
    )
}