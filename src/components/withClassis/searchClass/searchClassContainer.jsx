import React from "react"
import getDataAPI from "../../../API/API"
import Search from "./searchClass"

class SearchClassContainer extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            info: [],
            loading: true
        }
    }
    setText = (newText) => {
        this.setState({
            text: newText
        })
        console.log(this.state)
    }
    setInfo(newInfo){
        this.setState((state) => {
            return {info: newInfo}
        })
    }
    setLoading(boolean){
        this.setState((state) => {
            return {loading: boolean}
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.text !== this.state.text){
            this.setState((state) => {
                return {loading: true}
            })
            getDataAPI(this.state.text).then((e)=>{
                this.setState((state) => {
                    return {
                        info: [],
                    }
                })
                this.setState((state) => {
                    return {
                        info: e,
                        loading: false
                    }
                })
            })
        }
    }
    render(){
        return(
            <div>
                <Search
                text = {this.state.text}
                info = {this.state.info}
                loading = {this.state.loading}
                setText = {this.setText}
                setInfo = {this.setInfo}
                />
            </div>
        )
    }
}

export default SearchClassContainer;
