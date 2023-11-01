import { Link } from "react-router-dom";
import LoginMenu from './Components/LogiMenu'
import { useState } from "react";
import IsLogin from "../../Components/Auth/IsLogin";
import ProfileMenu from "./Components/ProfileMenu";

export default function Navigation() {  

    const userLogin = IsLogin()

    const [loginMenu, setLoginMenu] = useState(false)

    function handleClickLogin(){
        setLoginMenu(loginMenu => !loginMenu)
        console.log(loginMenu)
    }

    return (
        <><nav className="navbar navbar-expand-lg bg-black pl-3 pr-3">
            <div className="container-fluid">
                <h1 className="navbar-brand">
                    <span style={{ color: '#FFFFFF' }}>Holi</span>
                    <span style={{ color: '#FC7D14' }}>daze</span>
                </h1>
                {
                    userLogin ? 
                    <ProfileMenu/>
                    : null
                }

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        {userLogin ? null :<li className="nav-item">
                            <Link to="/register">Register user</Link>
                        </li>}
                        {userLogin ? null :<li className="nav-item">
                            <button className="btn btn-primary" onClick={handleClickLogin}>Login</button>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
        {loginMenu ? <LoginMenu></LoginMenu>: ''}
    </>
    )
}