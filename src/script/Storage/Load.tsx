
interface IStoreName {
    StoreName:string, 
}

export default function Load (StoreName:IStoreName){
   const data = localStorage.getItem(`${StoreName}`)

    if(data) return JSON.parse(data)
   if(!data) return false 

}