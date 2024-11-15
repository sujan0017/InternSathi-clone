import { useState } from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import {
  MdConnectWithoutContact,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import {
  PiBookmarkSimpleLight,
  PiDotThin,
  PiShoppingBagOpenFill,
} from "react-icons/pi";
import { CgAddR } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import DashboardHome from "../../components/dashboard/DashboardHome";
import { IoIosArrowDown } from "react-icons/io";
import SearchOpportunities from "../../components/dashboard/SearchOpportunities";
import MyProfile from "../../components/dashboard/MyProfile";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  console.log(menuOpen);

  return (
    <section className="relative min-h-screen ">
      <DashboardHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

      {/* PC Menu */}
      <div
        className={` min-w-64 h-screen flex flex-col items-start p-3 bg-white absolute top-0 left-0 z-10 border-r hidden md:block`}
      >
        <Link to={"/"}>
          <Logo
            img={`https://internsathi.com/_next/image?url=%2Flogo_black.png&w=256&q=75`}
          />
        </Link>
        <div className="w-full h-full flex flex-col justify-between items-center ">
          <div className="mt-5  w-full h-full">
            <Link className="flex items-center justify-start gap-5 text-secondary py-2 bg-secondary bg-opacity-15 px-2 rounded-md font-medium">
              <MdOutlineSpaceDashboard className="text-xl" />
              Dashboard
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <IoSearch className="text-xl" />
              Search
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <FaRegMessage className="text-xl" />
              Inbox
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <BsPerson className="text-xl" />
              Profile
            </Link>

            <div className="w-full">
              <div
                onClick={() => setShowApplications(!showApplications)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Application
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>
              <div className={showApplications ? "block" : "hidden"}>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Job Application
                </Link>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Event Application
                </Link>
              </div>
            </div>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <PiBookmarkSimpleLight className="text-xl" />
              Bookmarks
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <CgAddR className="text-xl" />
              Profile
            </Link>

            <div className="w-full">
              <div
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <MdConnectWithoutContact className="text-xl" />
                  Contact Us
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>
              <div className={showContactMenu ? "block" : "hidden"}>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Contact
                </Link>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  History
                </Link>
              </div>
            </div>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <IoSettingsOutline className="text-xl" />
              Setting
            </Link>
          </div>

          <Link className=" w-full flex items-center justify-center gap-5 text-fontColor border-2 hover:text-secondary py-2 hover:bg-slate-200 hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
            <TbLogout2 className="text-xl" />
            LogOut
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onMouseLeave={() => setMenuOpen(false)}
        className={`${
          menuOpen ? "dev-slide-right-open" : "dev-slide-right-close"
        } min-w-64 h-screen flex flex-col items-start px-3 py-5  absolute top-0 left-0 z-10 border-r block md:hidden bg-white`}
      >
        <Link to="/">
          <Logo
            img={`https://internsathi.com/_next/image?url=%2Flogo_black.png&w=256&q=75`}
          />
        </Link>
        <div className="w-full h-full flex flex-col justify-between items-center ">
          <div className="mt-5  w-full h-full">
            <Link className="flex items-center justify-start gap-5 text-secondary py-2 bg-secondary bg-opacity-15 px-2 rounded-md font-medium">
              <MdOutlineSpaceDashboard className="text-xl" />
              Dashboard
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <IoSearch className="text-xl" />
              Search
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <FaRegMessage className="text-xl" />
              Inbox
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <BsPerson className="text-xl" />
              Profile
            </Link>

            <div className="w-full">
              <div
                onClick={() => setShowApplications(!showApplications)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Application
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>
              <div className={showApplications ? "block" : "hidden"}>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Job Application
                </Link>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Event Application
                </Link>
              </div>
            </div>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <PiBookmarkSimpleLight className="text-xl" />
              Bookmarks
            </Link>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <CgAddR className="text-xl" />
              Profile
            </Link>

            <div className="w-full">
              <div
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <MdConnectWithoutContact className="text-xl" />
                  Contact Us
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>
              <div className={showContactMenu ? "block" : "hidden"}>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Contact
                </Link>
                <Link className="flex items-center gap-5 font-normal  text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 text-normal rounded-md ">
                  {" "}
                  <PiDotThin className="text-3xl" />
                  History
                </Link>
              </div>
            </div>

            <Link className="flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
              <IoSettingsOutline className="text-xl" />
              Setting
            </Link>
          </div>

          <Link className=" w-full flex items-center justify-center gap-5 text-fontColor border-2 hover:text-secondary py-2 hover:bg-slate-200 hover:bg-opacity-15 px-2 rounded-md font-medium mt-1">
            <TbLogout2 className="text-xl" />
            LogOut
          </Link>
        </div>
      </div>

      <div className="bg-secondaryBg h-[92vh]  md:ml-64 px-5 py-5 ">
        {/* <DashboardHome /> */}
        {/* <SearchOpportunities /> */}
        <MyProfile />
      </div>

    </section>
  );
}

export default Dashboard;