import { CiBookmark } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiHandbagLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { TfiTime } from "react-icons/tfi";

function RecruiterHome() {
  return (
    <div className="w-full h-full flex flex-col  gap-5">
      <h3 className="text-2xl font-bold ">{`Hey there, Sujan Bk!`}</h3>

      <div className="w-full bg-white border rounded-md p-[16px] flex flex-col  items-center md:flex-row md:items-center  gap-3  ">
        <div className="size-10 bg-secondaryBg flex justify-center items-center rounded-full shadow-md ">
          <FaMobileAlt className="text-xl" />
        </div>

        <div className="w-full ">
          <p className="font-medium ">
            You have not provided your phone number!
          </p>
          <p className="text-sm text-fontColor">
            Update and verify your phone number to make sure recruiters can
            easily contact you.
          </p>
        </div>

        <div className="self-end md:w-64 ">
          <button className="flex items-center justify-center text-sm font-medium  bg-secondary text-white  p-2 rounded-md  ">
            Update Phone Number <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-8 ">
        <DashboardHomeCart
          icons={<PiHandbagLight className="text-6xl text-green-700" />}
          heading={`Applied`}
          number={0}
        />
        <DashboardHomeCart
          icons={<TfiTime className="text-6xl text-orange-500" />}
          heading={`Alerts`}
          number={60}
        />
        <DashboardHomeCart
          icons={<RxCross2 className="text-6xl text-red-500" />}
          heading={`Reject`}
          number={0}
        />
        <DashboardHomeCart
          icons={<CiBookmark className="text-6xl text-blue-500" />}
          heading={`Bookmarks`}
          number={0}
        />
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
