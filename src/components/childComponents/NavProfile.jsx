import {MdOutlineLogout, MdOutlinePersonOutline} from "react-icons/md";
import {logout} from "../../../firebase-config.js";
const NavProfile = () => {
    const handleLogout = async () => {
        await logout();
        window.location.href = "/";
    };

    var userName = localStorage.getItem('userName');
    return (
    <>
        <div className="profile-nav-cont flex">
            <MdOutlinePersonOutline size={27}/>
            <p className="profile-name font-bold mx-4">{userName}</p>

            <MdOutlineLogout size={27}/>
            <button onClick={handleLogout} className="profile-name font-bold">Logout</button>
        </div>
    </>
    )
}

export default NavProfile