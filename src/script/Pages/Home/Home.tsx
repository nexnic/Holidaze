
import Loading from "../../Layout/Loading/Loading"
import Error from "../../Layout/Error/Error"
import { ApiRequeset } from "../../Components/API/ApiRequeset";
import Header from "../../Layout/Header/Header";

export default function Home() {
    const {data, isLoading, isError} = ApiRequeset()
    console.log(data)

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
        <>
            <Header data={data}/>
        </>
    )
}