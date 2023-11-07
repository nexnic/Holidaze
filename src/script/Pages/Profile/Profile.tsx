//import Load from "../../Storage/Load";
import { useParams} from 'react-router-dom';
import GetToken from '../../Components/GetInfo/GetToken';

import GetProfile from '../../Components/API/Auth/GetProfile';
import Loading from '../../Layout/Loading/Loading';
import Error from '../../Layout/Error/Error';
import ProfileImage from './Components/ProfileImage';
import ProfileInfo from './Components/ProfileInfo';






export default function ProfileConfig () {
    const {userID} = useParams()
    const Token = GetToken()
    // @ts-expect-error: TODO
    const { data, isLoading, isError } = GetProfile(userID ,Token);
    // @ts-expect-error: TODO
    const {email, name , avatar} = data 

    if(isLoading){
        return <Loading />
    }
    if(isError){
        return <Error />
    }
    else {
        return (
            <main className=''>
                <ProfileImage Avatar={avatar}/>
                <ProfileInfo  UserName={name} UserEmail={email}/>
                


            </main>
        )
    }
    




}