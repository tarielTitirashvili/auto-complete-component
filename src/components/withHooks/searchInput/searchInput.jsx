import React, { useState } from "react"
import Hint from "../hint/hint"
import css from './searchInput.module.css'
import Loading from "../loading/loading"

export default function SearchInput(props){
    const [focus, setFocus] = useState(false)

    function onchange(event) {
        props.setText(event.target.value)
    }
    
    return(
        <div className = {css.container} style = {{"height": window.innerHeight}}>
            <h1 className = {css.title}> search with hooks </h1>
            <div className = {css.searcher_container} >
                <input 
                    className = {css.search_input} 
                    type="text" 
                    onFocus = {()=>setFocus(true)} 
                    value = {props.text} 
                    onBlur = {()=>setTimeout(() => {
                        setFocus(false)
                    }, 100)}
                    onChange = {(e)=>onchange(e)} 
                    placeholder = "what you looking for" 
                />
                <div style = {{display : focus? "inline":"none"}} className = {css.hint_container}>
                    {props.loading? <Loading />
                    : props.info.map(e=>{
                        return <Hint 
                          setText = {props.setText}
                          key = {e.id}
                          title = {e.title}
                          text = {props.text}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}