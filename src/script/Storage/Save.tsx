interface IdataLS{
    LcName:string|number
    LcData:string
    LcNameToken:string
}

export default function Save (LcName:IdataLS, LcData:IdataLS){
    const MakeString = JSON.stringify(LcData)

    try {
        // @ts-expect-error: TODO
        localStorage.setItem(LcName, MakeString)
        return true
    } catch {
        return false
    }
}