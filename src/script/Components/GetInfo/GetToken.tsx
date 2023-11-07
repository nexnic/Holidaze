import Load from "../../Storage/Load";

export default function GetToken(){
    // @ts-expect-error: TODO
    const Token = Load('accessToken')
    return Token
}