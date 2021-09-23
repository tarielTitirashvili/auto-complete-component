import React from "react"
import css from "./searchClass.module.css"
import Loading from "../../withHooks/loading/loading"
import HintClass from "../hintClass/hintClass"

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            focus: false
        }
    }
    setFocus(booleans){
        this.setState((state) => {
            return {focus: booleans}
        })
    }
    
    render(){
        return(
            <div className = {css.container} style = {{"height": window.innerHeight}}>
            <h1 className = {css.title}> Search with Classes </h1>
            <div className = {css.searcher_container}>
                <input 
                    className = {css.search_input} 
                    type="text" 
                    onFocus = {()=>this.setFocus(true)} 
                    value = {this.props.text} 
                    onBlur = {()=>setTimeout(() => {
                        this.setFocus(false)
                    }, 100)}
                    onChange = {(e)=> this.props.setText(e.target.value)} 
                    placeholder = "what you looking for" 
                />
                <div className = {css.hint_container} style = {{display : this.state.focus? "inline":"none"}} >
                    {this.props.loading? <Loading />
                        : this.props.info.map(e=>{
                          return <HintClass 
                          setText = {this.props.setText}
                          key = {e.id}
                          title = {e.title}
                          text = {this.props.text}
                        />
                        }
                    )}
                </div>
            </div>
        </div>
        )
    }
}

export default Search