import {logout} from "../../firebase-config.js";
const Logout = () => {
    const handleLogout = async () => {
        await logout();
        window.location.href = "/login"; // Redirect to the login page after logout
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    );
};

export default Logout;
