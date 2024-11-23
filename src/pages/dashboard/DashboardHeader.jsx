/* eslint-disable react/prop-types */
import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

function DashboardHeader({
  setMenuOpen,
  menuOpen,
  handleButtonClick,
  hrefDashboard = "/dashboard/candidate",
  hrefProfile = "/dashboard/candidate/profile",
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div className="py-4 border-b-2 flex items-center justify-between px-5">
      <div>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <RiMenu2Line className="text-black text-2xl" />
        </button>
      </div>
      <div className="flex items-center gap-7">
        {/* Notification Icon */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("notifications")}
            className="size-7 bg-slate-200 flex items-center justify-center p-1 rounded-full"
            aria-expanded={activeDropdown === "notifications"}
            aria-controls="notification-dropdown"
          >
            <BsBellFill />
          </button>
          {activeDropdown === "notifications" && (
            <div
              id="notification-dropdown"
              className="min-w-[480px] h-20 bg-white border rounded-md absolute right-0 top-9 p-4"
            >
              <div className="flex items-center justify-between">
                <h5 className="font-normal">Notification</h5>
                <p className="text-secondary text-sm hover:cursor-pointer">
                  Mark all as Read
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div
          onMouseEnter={() => toggleDropdown("profile")}
          onMouseLeave={() => setActiveDropdown(null)}
          className="relative hover:cursor-pointer"
        >
          <div className="px-3 py-2 flex gap-2 items-center">
            <div className="w-8 h-8 rounded-full">
              <img
                src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1730115089799-94261846.png&w=128&q=75"
                alt="Profile"
                className="rounded-full"
              />
            </div>
            <p className="text-black font-normal">Sujan BK</p>
            <IoMdArrowDropdown className="text-black text-xl" />
          </div>
          {activeDropdown === "profile" && (
            <div
              className="absolute top-12 right-0 bg-white rounded-md shadow-lg z-10"
              aria-label="Profile menu"
            >
              <Link
                to={hrefDashboard}
                onClick={() => handleButtonClick("dashboard")}
                className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7"
              >
                <IoHomeOutline /> Dashboard
              </Link>
              <Link
                onClick={() => handleButtonClick("profile")}
                to={hrefProfile}
                className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7"
              >
                <GoPerson /> Profile
              </Link>
              <p
                className="text-fontColor hover:bg-secondary hover:bg-opacity-10 hover:text-secondary flex items-center gap-3 pl-2 py-2 pr-7 cursor-pointer"
                onClick={() => console.log("Logout clicked")}
              >
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
