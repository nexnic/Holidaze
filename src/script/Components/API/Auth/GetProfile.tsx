import { useState,useEffect } from "react"

interface IGetProfile {
    userID:string | undefined  ,
    Token:string | undefined,
} 



export default function GetProfile({userID, Token}:IGetProfile){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        async function getData(){
            try {
                setIsLoading(true);
                setIsError(false)
                const fetchedData = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${userID}`,{
                    method: 'GET',
                    headers:{
                        Authorization: `Bearer ${Token}`,
                        'Content-type': 'application/json; charset=UFT-8',
                    }
                })
                const responseData = await fetchedData.json()
                setData(responseData)
            } catch (error) {
                console.log(error)
                setIsError(true)
            } finally{
                setIsLoading(false)
            }
        }
        getData()
    }, [userID, Token]);
    return {data, isLoading, isError}
}