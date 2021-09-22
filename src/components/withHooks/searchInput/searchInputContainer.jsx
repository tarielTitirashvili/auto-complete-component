import React, { useEffect, useState } from "react"
import getDataAPI from "../../../API/API"
import SearchInput from "./searchInput"

export default function SearchInputContainer() {
    const [text,setText] = useState('')
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(text)

    useEffect(()=>{
        setLoading(true)
        getDataAPI(text).then((e)=>{
            setInfo(e)
            setLoading(false)
        })
    },[text])
    return(
        <div>
            <SearchInput 
              text = {text}
              setText = {setText}
              info = {info}
              setInfo = {setInfo}
              loading = {loading}
            />
        </div>
    )
}