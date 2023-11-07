import Load from "./Load"

export default function CleanLocal() {
    localStorage.clear()
    // @ts-expect-error: TODO
    const CheckLocalStore = Load('userData')
    console.log(CheckLocalStore)
}