import { MdOutlinePersonOutline } from "react-icons/md";

const NavProfile = () => {
    var userName = localStorage.getItem('userName');

    return (
    <>
  <div className="profile-nav-cont flex">
      <MdOutlinePersonOutline size={27} />
      <p className="profile-name font-bold">{userName}</p>
    </div>
    </>
  )
}

export default NavProfile