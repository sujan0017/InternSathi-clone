import { AiOutlineEye } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";
import { PiHandbagLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";
import { TfiTime } from "react-icons/tfi";

function RecruiterHome() {
  return (
    <div className="w-full h-full flex flex-col  gap-5 overflow-y-auto">
      <h3 className="text-2xl font-bold ">{`Welcome back! Sujan Bk`}</h3>

      <div className="w-full bg-white border rounded-md p-[16px] flex flex-col items-center gap-3 sm:flex-row sm:justify-between  ">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <div className="size-12 p-2 bg-secondaryBg flex justify-center items-center rounded-full shadow-md ">
            <GoPerson className="text-xl" />
          </div>

          <div className="flex flex-col  items-center sm:items-start ">
            <p className="font-medium text-sm ">
              You haven't completed your project yet.
            </p>
            <p className="text-sm text-fontColor">
              Take a few minutes to fill your profile.
            </p>
            <div className="mt-3">
              <li className="text-fontColor text-sm">Upload company Images</li>
              <li className="text-fontColor text-sm">Add Social Links</li>
            </div>
          </div>
        </div>

        <div className=" ">
          <button className="flex items-center justify-center text-sm font-medium  bg-secondary text-white  p-2 rounded-md  ">
            Complete Now <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="p-[36px] bg-newPrimary rounded-lg ">
        <h1 className="text-2xl font-bold text-white">
          Post Your Internship/Job
        </h1>
        <p className="  text-white">
          Find the perfect fit for your team-post your job with us today!
        </p>
        <div className="mt-2 ">
          <button className="flex items-center justify-center text-sm font-medium  bg-secondary text-white  p-2 rounded-md  ">
            Post a internship/Job{" "}
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-8 ">
        <DashboardHomeCart
          icons={<PiHandbagLight className="text-6xl text-green-700" />}
          heading={`Total Jobs`}
          number={0}
        />

        <DashboardHomeCart
          icons={<LuMenuSquare className="text-6xl text-blue-700" />}
          heading={`Total Applicants`}
          number={0}
        />

        <DashboardHomeCart
          icons={<SiTicktick className="text-5xl text-red-500" />}
          heading={`Shortlisted`}
          number={0}
        />
        <DashboardHomeCart
          icons={<AiOutlineEye className="text-6xl text-orange-500" />}
          heading={`Viewed`}
          number={0}
        />
      </div>

      <div className="w-full grid sm:grid-cols-2 gap-10">
        <div className="bg-white rounded-md flex flex-col items-start border max-h-72">
          <p className="px-4 py-4 border-b-2 w-full ">New Applications</p>
          <div className=" w-[110px] h-full flex justify-center items-center self-center">
            <img src="https://internsathi.com/no-result.svg" alt="" />
          </div>
        </div>

        <div className="bg-white rounded-md flex flex-col items-start border">
          <p className="p-4 border-b-2 w-full ">Recent Activities</p>
          <div className="w-full flex flex-col gap-3">
            <RecruiterNotification />
            <RecruiterNotification />
            <RecruiterNotification />
            <RecruiterNotification />
            <RecruiterNotification />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruiterHome;

export function DashboardHomeCart({ number, heading, icons }) {
  return (
    <div className="bg-white rounded-md flex-1 flex items-center justify-between gap-5 p-[20px] border">
      <div>
        <h2 className="text-3xl font-bold">{number}</h2>
        <p className="font-light mt-2">{heading}</p>
      </div>
      {icons}
    </div>
  );
}

export function RecruiterNotification() {
  return (
    <div className="w-full flex items-center justify-between border-b">
      <div className="flex items-center gap-2 p-4">
        <div className="size-12 bg-red-200 rounded-md"></div>
        <div>
          <p className="text-sm font-medium text-blue-500">User logged in</p>
          <p className="text-xs  font-normal text-fontColor ">
            Sujan Bk | bk.sujan1215@gmail.com{" "}
          </p>
        </div>
      </div>

      <p className="text-xs pr-4 text-fontColor font-light">1 hour ago</p>
    </div>
  );
}
