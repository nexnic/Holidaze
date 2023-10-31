import Load from "../../Storage/Load";
import { useNavigate } from 'react-router-dom';





export default function ProfileConfig () {
    const IsLogin = Load('Etook')
    const navigate = useNavigate();

    if(!IsLogin) {
        navigate(`/`)
    }

    return (
        <div></div>
    )
}