
// Import 
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/Form/LoginForm";
export default function LoginMenu() {
    return (
        <div className="position-absolute top-10 end-0 bg-black px-4 py-3" style={{zIndex: 300, color: 'white'}}>
            <LoginForm></LoginForm>
            <div className="dropdown-divider"></div>
            <Link to="/register">Register</Link>
            <Link to="/404">Forgot password?</Link>
        </div>
    )
}