import React from "react"
import css from "./hintClass.module.css"

class HintClass extends React.Component{


    render(){
        return(
            <div className = {css.hint} onClick = {()=>this.props.setText(this.props.title)}>
                {this.props.title}
            </div>
        )
    }
}

export default HintClass