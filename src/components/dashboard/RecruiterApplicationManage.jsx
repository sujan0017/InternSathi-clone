import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function RecruiterApplicationManage({ icon, textColor = "black", title }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold ">{title}</h3>
        <div className="flex justify-start items-center gap-3 mt-2 mb-7">
          <Link className="text-xs">Dashboard</Link>
          <IoIosArrowForward />
          <p className="text-xs text-fontColor">Manage Applications</p>
          {icon}
          <p className={`text-xs text-${textColor}`}>{title}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="max-w-3xl flex flex-col items-center justify-center gap-5 mx-auto py-10 ">
          <h2 className=" text-2xl text-gray-700 text-center font-semibold">
            Select Your Job or Internship Post
          </h2>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            First Select job or internship and then you can manage your
            applicant of selected job or internship.
          </p>
          <div className=" w-full  rounded-lg flex items-center justify-center gap-5 pb-20 ">
            <div className="flex-1 border-2 rounded-md relative">
              <input
                type="text"
                placeholder="Search & Select job or internship"
                className="p-2 w-full  "
              />
              <RiArrowDownDoubleLine className="absolute top-3 right-3 text-xl" />
            </div>
            <div className="bg-secondary bg-opacity-80 rounded-md flex items-center justify-center size-12  ">
              <BsBoxArrowUpRight className=" text-white text-xl " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruiterApplicationManage;
