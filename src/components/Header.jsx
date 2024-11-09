import { Link } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { GoTriangleDown } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons
import { useState } from "react";
import Logo from "./Logo";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="w-full h-[64px] bg-primary flex justify-center items-center fixed z-20">
      <div className=" px-5 2xl:px-[142px] w-full flex justify-between items-center ">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <nav className="flex gap-5 items-center">
            {navMenu.map((menu) => (
              <Link className="text-white " to={menu.href} key={menu.id}>
                {menu.label}
              </Link>
            ))}
          </nav>
          <div className="relative flex justify-center">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-white flex items-center gap-1 "
            >
              Events <GoTriangleDown />
            </button>
            {isHovered && (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-36  bg-slate-100 absolute top-8 rounded-lg flex flex-col  opacity-[95%]"
              >
                <Link
                  className="hover:bg-secondary hover:bg-opacity-10 hover:rounded-md px-2 py-1 hover:text-secondary"
                  to="/"
                >
                  Events
                </Link>
                <Link
                  className="hover:bg-secondary hover:bg-opacity-10 hover:rounded-md px-2 py-1 hover:text-secondary"
                  to="/browse-events"
                >
                  Browse Events
                </Link>
              </div>
            )}
          </div>
          <div className="flex gap-5 items-center">
            <Link to="auth/login" className="text-white  hover:text-secondary">
              Login
            </Link>
            <div className="relative">



              <button
                onClick={() => setRegisterModal(!registerModal)}
                className=" px-3 py-[4px] bg-[#0071cd] rounded-lg flex gap-1 items-center text-white hover:drop-shadow-2xl hover:shadow-blue-100"
              >
                Register <GoTriangleDown />
              </button>



              {registerModal && (
                <div
                  onMouseEnter={() => setRegisterModal(true)}
                  onMouseLeave={() => setRegisterModal(false)}
                  className="w-48  bg-slate-100 absolute top-10 right-[2px] rounded-lg flex flex-col  opacity-[95%]"
                >
                  <Link
                    className="hover:bg-slate-300 px-2 py-2 rounded-t text-sm"
                    to="auth/register-candidate"
                  >
                    Register as a candidate
                  </Link>
                  <Link
                    className="hover:bg-slate-300 px-2 py-2 text-sm "
                    to="auth/register-recruiter"
                  >
                    Register as recruiter
                  </Link>
                  <Link
                    className="hover:bg-slate-300 px-2 py-2 rounded-b text-sm"
                    to="auth/register-institute"
                  >
                    Register as an institute
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <HiMenu className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`${
            menuOpen ? "dev-slide-right-open" : "dev-slide-right-close"
          } md:hidden min-w-[280px] h-lvh flex flex-col items-start p-3 bg-[#17171F] absolute top-0 left-0 z-10 border-r `}
        >
          <div className="flex justify-between items-center w-full mb-4">
            <Logo width={160} />
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <HiX className="text-white text-2xl" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 w-full">
            {navMenu.map((menu) => (
              <Link
                className="text-white flex-1 py-2"
                to={menu.href}
                key={menu.id}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {menu.label}
              </Link>
            ))}
          </nav>
          <div className="relative">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-white flex items-center gap-1 mt-6"
            >
              Events <GoTriangleDown />
            </button>

            {isHovered && (
              <div className="w-36 p-2 bg-slate-100 rounded-lg flex flex-col gap-2 opacity-[95%] mt-2 absolute top-12 z-10">
                 <Link
                  className="hover:bg-secondary hover:bg-opacity-10 hover:rounded-md px-2 py-1 hover:text-secondary"
                  to="/"
                >
                  Events
                </Link>
                <Link
                  className="hover:bg-secondary hover:bg-opacity-10 hover:rounded-md px-2 py-1 hover:text-secondary"
                  to="/browse-events"
                >
                  Browse Events
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-10 w-full mt-6 relative">
            <Link
              className="text-white font-semibold hover:text-secondary  "
              to="auth/login"
            >
              Login
            </Link>
            <button
              onClick={() => setRegisterModal(!registerModal)}
              className="font-semibold px-[10px] py-[8px] bg-secondary rounded-lg gap-1 flex  items-center  text-white "
            >
              Register <GoTriangleDown />
            </button>
            {registerModal && (
              <div className="w-48 p-2 bg-slate-100 rounded-lg flex flex-col gap-2 opacity-[95%] mt-2 absolute top-11">
                <Link className="text-sm" to="auth/register-candidate">
                  Register as a candidate
                </Link>
                <Link className="text-sm" to="auth/register-recruiter">
                  Register as recruiter
                </Link>
                <Link className="text-sm" to="auth/register-institute">
                  Register as an institute
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
