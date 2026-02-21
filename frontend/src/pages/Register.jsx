import Form from "../components/Form"
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"
import NavDrawer from '../components/NavDrawer'

function BackToLoginButton () {
    const navigate = useNavigate();
    const handleBackToLogin= () => {
        navigate("/login")
    };

    return (
        <button className="backtologin-button" onClick={handleBackToLogin}>
            Back to Login
        </button>
    );
}


function Register() {
    return (
        <div>
            <NavDrawer/>
            <Form route="/api/user/register/" method="register" />
            <BackToLoginButton />
        </div>
    );
}

export default Register
