import Load from "../../Storage/Load";

export default function IsLogin () {
    const IsUserLogin = Load('accessToken')
    if(IsUserLogin) return true
    if(!IsUserLogin) return false

}