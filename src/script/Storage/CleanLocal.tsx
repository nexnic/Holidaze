import Load from "./Load"

export default function CleanLocal() {
    localStorage.clear()
    const CheckLocalStore = Load('userData')
    console.log(CheckLocalStore)
}