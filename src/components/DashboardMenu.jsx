import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function DashboardMenu({ handleButtonClick, hrefDashboard= "/dashboard/candidate", hrefProfile= "dashboard/candidate/profile",}) {
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <div
      onMouseEnter={() => setProfileMenu(true)}
      onMouseLeave={() => setProfileMenu(false)}
      className="  hover:cursor-pointer relative  "
    >
      <div className="px-3 py-2 flex gap-2  items-center">
        <div className="w-8 h-8  rounded-full">
          <img
            src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1730115089799-94261846.png&w=128&q=75"
            alt=""
            className="rounded-full"
          />
        </div>
        <p className="text-white">Sujan Bk</p>
        <IoMdArrowDropdown className="text-white" />
      </div>
      {profileMenu && (
        <div
          onMouseEnter={() => setProfileMenu(true)}
          onMouseLeave={() => setProfileMenu(false)}
          className="absolute top-12 right-0 bg-white rounded-md  shadow-lg"
        >
          <Link
            onClick={() => handleButtonClick("dashboard")}
            to={hrefDashboard}
            className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer"
          >
            <IoHomeOutline /> Dashboard
          </Link>
          <Link
            onClick={() => handleButtonClick("profile")}
            to={hrefProfile}
            className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer"
          >
            <GoPerson /> Profile
          </Link>
          <p className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer">
            <CiLogout /> Logout
          </p>
        </div>
      )}
    </div>
  );
}

export default DashboardMenu;
