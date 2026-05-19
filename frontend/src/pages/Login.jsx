import Form from "../components/Form"
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

function ShowNoAccountButton () {
    const navigate = useNavigate();
    const handleNoAccount = () => {
        navigate("/register")
    };

    return (
        <button className="login-button" onClick={handleNoAccount}>
            Don't have account
        </button>
    );
}

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <ShowNoAccountButton />
        </div>
    );
}

export default Login
