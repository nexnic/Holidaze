import { Link } from "react-router-dom";
import LoginMenu from './Components/LogiMenu'

export default function Navigation() {

    return (
        <><nav className="navbar navbar-expand-lg bg-black pl-3 pr-3">
            <div className="container-fluid">
                <h1 className="navbar-brand">
                    <span style={{ color: '#FFFFFF' }}>Holi</span>
                    <span style={{ color: '#FC7D14' }}>daze</span>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register">Register user</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" data-bs-target="#dropDownmenu-login" aria-controls="dropDownmenu-login" aria-expanded="false" aria-label="Toggle navigation">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <LoginMenu></LoginMenu>
    </>
    )
}