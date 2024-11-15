import { CiMobile3 } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";
import { GrAchievement } from "react-icons/gr";

import {
  IoBagCheckOutline,
  IoLanguageOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { MdRocketLaunch } from "react-icons/md";
import { RiUploadLine } from "react-icons/ri";

import { Link } from "react-router-dom";

function MyProfile() {
  return (
    <div className="w-full h-full">
      <h3 className="text-2xl font-bold ">{`My Profile`}</h3>
      <div className="flex gap-5 ">
        <div className="mt-5  w-full h-[83vh] max-w-64">
          <Link className="flex items-center justify-start gap-5 text-secondary py-2 bg-white  px-2 rounded-md font-medium">
            <IoPersonOutline className="text-xl" />
            About
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <FaGraduationCap className="text-xl" />
            Education
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <MdRocketLaunch className="text-xl" />
            Projects
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <IoBagCheckOutline className="text-xl" />
            Experience
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <GoLightBulb className="text-xl" />
            Skills
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <GrAchievement className="text-xl" />
            Achievement
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <FaChalkboardTeacher className="text-xl" />
            Training
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <IoLanguageOutline className="text-xl" />
            Language
          </Link>

          <Link className="flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1">
            <CiMobile3 className="text-xl" />
            Email and Phone
          </Link>
        </div>
        <div className=" w-full rounded-md flex-1 mt-5 overflow-y-auto h-[80lvh]  ">
          {/* About Yourself */}
          <div className="bg-white border rounded-md p-7 flex flex-col ">
            <h3 className="font-medium text-xl">About Yourself</h3>
            <p className="text-fontColor text-sm ">
              Fill out your primary information.
            </p>

            <div className="flex  items-center justify-start gap-5 mt-5">
              <div className="size-16 rounded-full bg-secondaryBg flex items-center justify-center ">
                <img
                  src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1730115089799-94261846.png&w=128&q=75"
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="text-secondary font-semibold flex items-center justify-start gap-2">
                <RiUploadLine />
                Upload profile Picture
              </div>
            </div>
            <form className="flex  flex-col gap-5 mt-5 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you email address"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you email address"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Date of Birth<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Sectors<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you email address"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Destination<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  About Me<span className="text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter you full Name"
                  className="p-3 text-sm border-2 rounded-md w-full h-52"
                />
              </div>
            </form>
            <div className="mt-5 self-end">
              <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
                Save
              </button>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white border rounded-md p-7 flex flex-col mt-5 ">
            <h3 className="font-medium text-xl">Address</h3>
            <form action="" className="flex  flex-col gap-5 mt-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you email address"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    Date of Birth<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you full Name"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you full Name"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </form>
            <div className="mt-5 self-end">
              <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
                Save
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white border rounded-md p-7 flex flex-col mt-5">
            <form
              action="
            "
            >
              <div className="flex  gap-5">
                <div className="flex flex-col gap-1 mt-1 w-36 ">
                  <label className="text-sm">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you email address"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
                <div className="w-full flex flex-col gap-1 mt-1 flex-1 ">
                  <label className="text-sm">
                    Date of Birth<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
