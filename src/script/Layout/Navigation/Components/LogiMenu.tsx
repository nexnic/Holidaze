
// Import 
import { Link } from "react-router-dom";
export default function LoginMenu() {
    return (
        <div className="position-absolute top-10 end-0 bg-black px-4 py-3" style={{zIndex: 300, color: 'white'}}>
            <form className="">
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" htmlFor="dropdownCheck">
                        Remember me
                        </label>
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Sign in</button>
            </form>
            <div className="dropdown-divider"></div>
            <Link to="/register">Register</Link>
            <Link to="/404">Forgot password?</Link>
        </div>
    )
}