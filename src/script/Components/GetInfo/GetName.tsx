import Load from "../../Storage/Load";

export default function GetName (){
    const Userdata = Load('userData')
    const {name} = Userdata 
    return name 
}