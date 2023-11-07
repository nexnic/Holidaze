import Load from "../../Storage/Load";

export default function GetName (){
    // @ts-expect-error: TODO
    const Userdata = Load('userData')
    const {name} = Userdata 
    return name 
}