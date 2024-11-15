/* eslint-disable react/prop-types */
import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

function DashboardHeader({ setMenuOpen, menuOpen }) {
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <div className="py-4 border-b-2 flex items-center justify-between px-5 ">
      <div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <RiMenu2Line className="text-black text-2xl" />
        </button>
      </div>
      <div className="flex items-center gap-7">
        <div>
          <button className="size-7 bg-slate-200 flex items-center justify-center p-1 rounded-full">
            <BsBellFill />
          </button>
          <div></div>
        </div>
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
            <p className="text-black font-normal">Sujan Bk</p>
            <IoMdArrowDropdown className="text-black text-xl" />
          </div>
          {profileMenu && (
            <div
              onMouseEnter={() => setProfileMenu(true)}
              onMouseLeave={() => setProfileMenu(false)}
              className="absolute top-12 right-0 bg-white rounded-md  shadow-lg"
            >
              <Link
                to="/dashboard"
                className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer"
              >
                <IoHomeOutline /> Dashboard
              </Link>
              <p className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer">
                <GoPerson /> Profile
              </p>
              <p className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer">
                <CiLogout /> Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
