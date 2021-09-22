import data from '../notAServer/data.json'

function getData(text) {
    let info = []
    data.map((e)=>{
        const relevantIndex = e.title.indexOf(text)
        if(relevantIndex>=0){
            if(info.length===0){
                info.push(e)
            }else{
                let counter = 0
                while(counter < info.length){
                    if(info[counter].title.indexOf(text)>relevantIndex){
                        info.splice(counter, 0, e)
                        counter+=info.length-counter
                    }else if(info.length === (counter+1)){
                        info.push(e)
                        counter+=2
                    }else{
                        counter++
                    }
                }
            }
        }
    })
    if(info.length<6){
        return info
    }else{
        info.splice(5, info.length-5)
        return info
    }
}


export default function getDataAPI(text, duration = 2000, ) {
    return new Promise((res, rej) => {
       setTimeout(() => res(getData(text)), duration, )
    });
}