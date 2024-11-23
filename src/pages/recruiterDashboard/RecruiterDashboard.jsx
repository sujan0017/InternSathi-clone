import { useState } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import {
  MdConnectWithoutContact,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { PiDotThin, PiShoppingBagOpenFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

import DashboardHeader from "../dashboard/DashboardHeader";
import RecruiterHome from "./RecruiterHome";
import RecruiterCompanyProfile from "./RecruiterCompanyProfile";
import RecruiterAllInternship from "./RecruiterAllInternship";
import RecruiterPostJob from "./RecruiterPostJob";
import RecruiterAllApplicants from "./RecruiterAllApplicants";
import RecruiterShortlisted from "./RecruiterShortlisted";
import RecruiterSave from "./RecruiterSave";
import RecruiterContact from "./RecruiterContact";
import RecruiterSetting from "./RecruiterSetting";
import RecruiterHistory from "./RecruiterHistory";
import RecruiterCredit from "./RecruiterCredit";
import RecruiterCreditUsage from "./RecruiterCreditUsage";

// eslint-disable-next-line react/prop-types
function RecruiterDashboard({ activeButton, handleButtonClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showApplications, setShowApplications] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [showManageMenu, setShowManageMenu] = useState(false);
  const [showMembershipMenu, setShowMembershipMenu] = useState(false);

  return (
    <section className="relative min-h-screen ">
      <DashboardHeader
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        handleButtonClick={handleButtonClick}
        hrefDashboard="dashboard/company"
        hrefProfile="dashboard/company/profile"
      />

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
            <Link
              to="/dashboard/company/"
              onClick={() => handleButtonClick("dashboard")}
              className={`${
                activeButton === "dashboard"
                  ? "bg-secondary bg-opacity-25 text-secondary "
                  : "bg-white text-fontColor  "
              } flex items-center justify-start gap-5 py-2  px-2 rounded-md font-medium`}
            >
              <MdOutlineSpaceDashboard className="text-xl" />
              Dashboard
            </Link>

            <Link
              to={"/dashboard/company/profile"}
              onClick={() => handleButtonClick("profile")}
              className={`${
                activeButton === "profile"
                  ? "bg-secondary bg-opacity-25 text-secondary "
                  : "bg-white text-fontColor"
              } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
            >
              <BsPerson className="text-xl" />
              Company Profile
            </Link>

            <div className="w-full">
              <div
                onClick={() => setShowApplications(!showApplications)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Internship/Jobs
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>

              <div className={showApplications ? "block" : "hidden"}>
                <Link
                  to={"/dashboard/company/internship-job"}
                  onClick={() => handleButtonClick("internshipJob")}
                  className={`${
                    activeButton === "internshipJob"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  All Internship/Job
                </Link>
                <Link
                  to={"/dashboard/company/internship-jobs"}
                  onClick={() => handleButtonClick("internshipJobPost")}
                  className={`${
                    activeButton === "internshipJobPost"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Post Interview/Jobs
                </Link>
              </div>
            </div>

            <div className="w-full">
              <div
                onClick={() => setShowManageMenu(!showManageMenu)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Manage Applicants
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>

              <div className={showManageMenu ? "block" : "hidden"}>
                <Link
                  to={"/dashboard/company/applicants"}
                  onClick={() => handleButtonClick("allApplicants")}
                  className={`${
                    activeButton === "allApplicants"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  All Applicants
                </Link>
                <Link
                  to={"/dashboard/company/applicants/shortlisted"}
                  onClick={() => handleButtonClick("shortlisted")}
                  className={`${
                    activeButton === "shortlisted"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Shortlisted
                </Link>
                <Link
                  to={"/dashboard/company/applicants/saved"}
                  onClick={() => handleButtonClick("save")}
                  className={`${
                    activeButton === "save"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Saved
                </Link>
              </div>
            </div>

            <div className="w-full">
              <div
                onClick={() => setShowMembershipMenu(!showMembershipMenu)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Membership
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>

              <div className={showMembershipMenu ? "block" : "hidden"}>
                <Link
                  to={"/dashboard/company/membership"}
                  onClick={() => handleButtonClick("credit")}
                  className={`${
                    activeButton === "credit"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Credit
                </Link>
                <Link
                  to={"/dashboard/company/membership/credit-usage"}
                  onClick={() => handleButtonClick("creditUsage")}
                  className={`${
                    activeButton === "creditUsage"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Credit Usage
                </Link>
              </div>
            </div>

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
                <Link
                  to={"/dashboard/company/contact"}
                  onClick={() => handleButtonClick("contact")}
                  className={`${
                    activeButton === "contact"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Contact
                </Link>
                <Link
                  to={"/dashboard/company/history"}
                  onClick={() => handleButtonClick("history")}
                  className={`${
                    activeButton === "history"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  History
                </Link>
              </div>
            </div>

            <Link
              to={"/dashboard/company/setting"}
              onClick={() => handleButtonClick("setting")}
              className={`${
                activeButton === "setting"
                  ? "bg-secondary bg-opacity-25 text-secondary "
                  : "bg-white text-fontColor"
              } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
            >
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
            <Link
              to="/dashboard/company/"
              onClick={() => handleButtonClick("dashboard")}
              className={`${
                activeButton === "dashboard"
                  ? "bg-secondary bg-opacity-25 text-secondary "
                  : "bg-white text-fontColor  "
              } flex items-center justify-start gap-5 py-2  px-2 rounded-md font-medium`}
            >
              <MdOutlineSpaceDashboard className="text-xl" />
              Dashboard
            </Link>

            <Link
              to={"/dashboard/company/profile"}
              onClick={() => handleButtonClick("profile")}
              className={`${
                activeButton === "profile"
                  ? "bg-secondary bg-opacity-25 text-secondary "
                  : "bg-white text-fontColor"
              } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
            >
              <BsPerson className="text-xl" />
              Company Profile
            </Link>

            <div className="w-full">
              <div
                onClick={() => setShowApplications(!showApplications)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Internship/Jobs
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>

              <div className={showApplications ? "block" : "hidden"}>
                <Link
                  to={"/dashboard/company/internship-job"}
                  onClick={() => handleButtonClick("internshipJob")}
                  className={`${
                    activeButton === "internshipJob"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  All Internship/Job
                </Link>
                <Link
                  to={"/dashboard/company/internship-jobs"}
                  onClick={() => handleButtonClick("internshipJobPost")}
                  className={`${
                    activeButton === "internshipJobPost"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Post Interview/Jobs
                </Link>
              </div>
            </div>

            <div className="w-full">
              <div
                onClick={() => setShowManageMenu(!showManageMenu)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Manage Applicants
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>

              <div className={showManageMenu ? "block" : "hidden"}>
                <Link
                  to={"/dashboard/company/applicants"}
                  onClick={() => handleButtonClick("allApplicants")}
                  className={`${
                    activeButton === "allApplicants"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  All Applicants
                </Link>
                <Link
                  to={"/dashboard/company/applicants/shortlisted"}
                  onClick={() => handleButtonClick("shortlisted")}
                  className={`${
                    activeButton === "shortlisted"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Shortlisted
                </Link>
                <Link
                  to={"/dashboard/company/applicants/saved"}
                  onClick={() => handleButtonClick("save")}
                  className={`${
                    activeButton === "save"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Saved
                </Link>
              </div>
            </div>

            <div className="w-full">
              <div
                onClick={() => setShowMembershipMenu(!showMembershipMenu)}
                className="flex w-full items-center justify-between group hover:text-secondary hover:bg-secondary hover:bg-opacity-15 rounded-md"
              >
                <Link className=" flex items-center justify-start gap-5 text-fontColor  py-2  px-2  font-medium mt-1 group-hover:text-secondary">
                  <PiShoppingBagOpenFill className="text-xl" />
                  Membership
                </Link>
                <IoIosArrowDown className="pr-2 text-xl" />
              </div>

              <div className={showMembershipMenu ? "block" : "hidden"}>
                <Link
                  to={"/dashboard/company/membership"}
                  onClick={() => handleButtonClick("credit")}
                  className={`${
                    activeButton === "credit"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Credit
                </Link>
                <Link
                  to={"/dashboard/company/membership/credit-usage"}
                  onClick={() => handleButtonClick("creditUsage")}
                  className={`${
                    activeButton === "creditUsage"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Credit Usage
                </Link>
              </div>
            </div>

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
                <Link
                  to={"/dashboard/company/contact"}
                  onClick={() => handleButtonClick("contact")}
                  className={`${
                    activeButton === "contact"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  Contact
                </Link>
                <Link
                  to={"/dashboard/company/history"}
                  onClick={() => handleButtonClick("history")}
                  className={`${
                    activeButton === "history"
                      ? "bg-secondary bg-opacity-25 text-secondary "
                      : "bg-white text-fontColor"
                  } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
                >
                  {" "}
                  <PiDotThin className="text-3xl" />
                  History
                </Link>
              </div>
            </div>

            <Link
              to={"/dashboard/company/setting"}
              onClick={() => handleButtonClick("setting")}
              className={`${
                activeButton === "setting"
                  ? "bg-secondary bg-opacity-25 text-secondary "
                  : "bg-white text-fontColor"
              } flex items-center justify-start gap-5 text-fontColor hover:text-secondary py-2 hover:bg-secondary hover:bg-opacity-15 px-2 rounded-md font-medium mt-1`}
            >
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
        {activeButton === "dashboard" && <RecruiterHome />}
        {activeButton === "profile" && <RecruiterCompanyProfile />}

        {activeButton === "internshipJob" && <RecruiterAllInternship />}
        {activeButton === "internshipJobPost" && <RecruiterPostJob />}

        {activeButton === "allApplicants" && <RecruiterAllApplicants />}
        {activeButton === "shortlisted" && <RecruiterShortlisted />}
        {activeButton === "save" && <RecruiterSave />}

        {activeButton === "credit" && <RecruiterCredit />}
        {activeButton === "creditUsage" && <RecruiterCreditUsage />}

        {activeButton === "contact" && <RecruiterContact />}
        {activeButton === "history" && <RecruiterHistory />}

        {activeButton === "setting" && <RecruiterSetting />}
      </div>
    </section>
  );
}

export default RecruiterDashboard;
