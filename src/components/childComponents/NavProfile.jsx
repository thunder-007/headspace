import React from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";

const NavProfile = () => {
  return (
    <>
  <div className="profile-nav-cont flex">
      <MdOutlinePersonOutline size={27} />
      <p className="profile-name font-bold"> HARSHA VARDHAN V </p>
    </div>
    </>
  )
}

export default NavProfile