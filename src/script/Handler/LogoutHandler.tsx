import { MouseEvent } from "react";
import CleanLocal from "../Storage/CleanLocal";

export default function LogoutHandler (event){
    event.preventDefault
    window.localStorage.clear();
    window.location.reload();
    
}