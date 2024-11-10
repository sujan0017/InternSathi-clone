import { CiClock1 } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import JobDescription from "./JobDescription";

function JobsSection() {
  return (
    <section className=" w-full  px-5 2xl:px-[142px] bg-fontColor bg-opacity-20">
      <div className="grid w-full grid-cols-12  gap-5 py-7 ">
        <div className="w-full flex flex-col justify-start  gap-4 max-h-[100vh] overflow-y-auto col-span-12 md:col-span-4  ">
          <JobsSectionCart />
          <JobsSectionCart />
          <JobsSectionCart />
          <JobsSectionCart />
          <JobsSectionCart />
          <JobsSectionCart />
          <JobsSectionCart />
          <JobsSectionCart />
        </div>
        <div className="col-span-8 rounded-lg min-h-[100vh] hidden md:block  max-h-[100vh] overflow-y-auto">

        <JobDescription />
        </div>
      </div>
    </section>
  );
}

export default JobsSection;

export function JobsSectionCart() {
  return (
    <div className="flex w-full p-[24px] flex-col gap-5 justify-start bg-white rounded-xl shadow-md ">
      <div className="flex gap-3 ">
        <div className="w-[57px] h-[57px] bg-slate-300 rounded-sm ">
          <img
            src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1709197805630-119758486.jpg&w=128&q=75"
            alt=""
            className="rounded-sm w-full h-full bg-center bg-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 shrink">
          <h4 className="text-lg font-medium text-gray-800">
            MERN Stack Developer Intern
          </h4>
          <p className="text-secondary">Hyteno</p>
        </div>
      </div>

      <div className="flex justify-between items-end ">
        <div className="flex gap-2 flex-wrap">
          <span className=" p-2 bg-gray-200 rounded-md text-xs ">
            #PaidInternship
          </span>
          <span className=" p-2 bg-gray-200 rounded-md text-xs ">
            #WenDevelopmentIntern
          </span>
        </div>
        <span className="font-semiBold text-xl">+2</span>
      </div>

      <div className="flex  items-center justify-between">
        <div className="text-xs flex items-center gap-2">
          <CiClock1 className="text-md" />
          25 days left
        </div>
        <Link
          to={"/internships/details"}
          className="text-xs flex justify-center items-center gap-1 text-secondary"
        >
          View Details <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
}

export function DetailCart({ heading, description, icon, pricePer }) {
  return (
    <div className="  py-7 flex items-center gap-5 ">
      <div className="w-[60px] h-[56px] flex justify-center items-center bg-secondary text-secondary bg-opacity-20 rounded-xl ">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-1">
        <h6 className="text-xs ">{heading}</h6>
        <div className="font-medium flex flex-col">
          {description}
          <span className="text-xs font-light">{pricePer}</span>
        </div>
      </div>
    </div>
  );
}
