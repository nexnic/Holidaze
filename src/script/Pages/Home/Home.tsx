import { useState } from "react"

import Loading from "../../Layout/Loading/Loading"
import Error from "../../Layout/Error/Error"

export default function Home() {
    const [isLoading, SetIsLoading] = useState(true)
    const [isError, SetIsError] = useState(true)

    

    if(isError){
        return(
            <Error />
        )
    }

    if(isLoading){
        return(
            <Loading />
        )
    } 
    return(
        <h1>test</h1>
    )
}