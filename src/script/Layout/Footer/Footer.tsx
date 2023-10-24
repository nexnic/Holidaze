import { Link } from "react-router-dom";


export default function Footer () {
    return (
        <footer className="fixed-bottom bg-black p-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>
                            <span style={{color: '#FFFFFF'}}>Holi</span>
                            <span style={{color: '#FC7D14'}}>daze</span>
                        </h3>
                        <p style={{color: '#FFFFFF'}}>
                            Your Gateway to Unforgettable Getaways
                        </p>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li>
                                <h5 style={{color: '#FFFFFF'}}>Our Company</h5>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <p style={{color: '#FFFFFF'}}>© 2023 by Kent Erik All Rights Reserved</p>
                    </div>
                    <div className="col-4">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}