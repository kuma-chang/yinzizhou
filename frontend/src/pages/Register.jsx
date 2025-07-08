import Form from "../components/Form"
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"

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
            <Form route="/api/user/register/" method="register" />
            <BackToLoginButton />
        </div>
    );
}

export default Register
