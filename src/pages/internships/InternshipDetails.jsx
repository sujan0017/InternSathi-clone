import { Link } from "react-router-dom";
import JobDescription from "../../components/JobsAndIntern/JobDescription";
import { IoIosArrowForward } from "react-icons/io";

function InternshipDetails() {
  return (
    <section className=" w-full  px-5 2xl:px-[142px] bg-fontColor bg-opacity-20 pt-[64px]  flex flex-col item-start gap-2">
      <div className="mt-5">
        <h2 className="text-xl font-bold ">Search internship</h2>
        <div className="flex justify-start items-center gap-3 mt-3">
          <Link className="text-sm text-fontColor hover:underline" to="/">
            Home
          </Link>
          <IoIosArrowForward className="text-fontColor" />
          <Link
            className="text-sm text-fontColor hover:underline"
            to="/internships"
          >
            Search Internship
          </Link>
          <IoIosArrowForward className="text-fontColor" />
          <Link className="text-sm text-fontColor hover:underline">
            MERN Stack Developer
          </Link>
        </div>
      </div>

      <div className=" grid grid-cols-12  gap-5 py-7 ">
        <div className=" col-span-12 md:col-span-8 ">
          <JobDescription />
        </div>

        <div className="col-span-4  hidden md:block">
          <div className="p-[24px] flex flex-col gap-5 bg-white rounded-md">
            <h5 className="text-xl font-medium">
              Are you interested in this Internship?
            </h5>
            <div className="flex flex-col ">
              <p className="text-xs text-fontColor">Application ends:</p>
              <p className="font-medium">November 9, 2024</p>
            </div>
            <button className="py-2 bg-secondary bg-opacity-30 font-semibold rounded-md ">
              Apply Now
            </button>
          </div>
          <div className="p-[24px]  bg-white rounded-md mt-5 ">
            <h5 className="text-xl font-medium mt-5">
              Are you interested in this Internship?
            </h5>
            <div className="border-b-2 my-5"></div>
            <p className=" text-fontColor">No internship available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipDetails;
