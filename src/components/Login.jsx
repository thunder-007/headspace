import {signInWithGoogle} from "../../firebase-config.js";

const Login = () => {
    const handleLogin = async () => {
        await signInWithGoogle();
        window.location.href = "/my_music"; // Redirect after login
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );
};

export default Login;
