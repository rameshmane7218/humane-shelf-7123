export const Loaddata=(key)=>{
    try{
        let data =localStorage.getItem(key)
        data=JSON.parse(data)
        return data
    }
    catch(e){
        return undefined
    }

}

export const Savedata=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}