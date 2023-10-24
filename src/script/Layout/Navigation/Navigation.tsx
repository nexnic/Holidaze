import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-black pl-3 pr-3">
            <div className="container-fluid">
                <h1>
                    <span style={{color: '#FFFFFF'}}>Holi</span>
                    <span style={{color: '#FC7D14'}}>daze</span>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse nav-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
    )
}