import GetName from "../Components/GetInfo/GetName"
import { useNavigate } from "react-router-dom";
export default function ProfileHandler () {
    const navigate = useNavigate();
    const UserName = GetName()
    
    navigate(`profile/${UserName}`)
}