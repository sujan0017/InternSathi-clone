import { BsCurrencyDollar } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { SiLevelsdotfyi } from "react-icons/si";
import { WiTime2 } from "react-icons/wi";
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

        <div className="w-full col-span-8 rounded-lg min-h-[100vh] hidden md:block  max-h-[100vh] overflow-y-auto ">
          <div className="w-full  py-7 bg-white rounded-lg">
            <div className="flex items-center justify-between pb-7  bg-white  px-7 ">
              <div className="flex gap-3 items-center ">
                <div className="w-[57px] h-[57px] bg-slate-300 rounded-sm ">
                  <img
                    src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1709197805630-119758486.jpg&w=128&q=75"
                    alt=""
                    className="rounded-sm w-full h-full bg-center bg-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="text-lg font-semibold ">
                    MERN Stack Developer Intern
                  </h4>
                  <p className="text-secondary">Hyteno</p>
                  <div className="text-sm flex items-center gap-10">
                    <div className="flex justify-center items-center gap-2">
                      <IoLocationOutline /> Kathmandu
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <WiTime2 />
                      Full time
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-5 ">
                <button className="px-7 py-2 bg-secondary text-white rounded-lg ">
                  Apply now
                </button>

                <Link className="text-sm text-secondary flex justify-center items-center gap-2">
                  View on full page <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>

            <div className="border-b-2"></div>

            <div className="flex justify-between flex-wrap bg-white px-7">
              <DetailCart
                heading={"Offered Salary"}
                description={"Rs. 10,000 - Rs. 20,000"}
                pricePer={"/ Monthly"}
                icon={<BsCurrencyDollar className="text-3xl  " />}
              />
              <DetailCart
                heading={"Location"}
                description={"Onsite"}
                icon={<GrLocation className="text-3xl  " />}
              />
              <DetailCart
                heading={"Level"}
                description={"Junior"}
                icon={<SiLevelsdotfyi className="text-3xl  " />}
              />
              <DetailCart
                heading={"Openings"}
                description={"4"}
                icon={<GoPeople className="text-3xl  " />}
              />
            </div>

            <div className="border-b-2"></div>

        
            <div className="px-7 mt-5">
              <JobDescription />
            </div>

           
          </div>
         

          <div className="bg-white flex flex-col justify-start gap-5 px-7 mt-3 rounded-lg p-5">
            <h3 className="text-xl font-medium">Tags</h3>
            <div className="flex item-center gap-5">
              <span className="border-2 py-2 px-3 rounded-lg text-xs">
                #paidinternship
              </span>
              <span className="border-2 py-2 px-3 rounded-lg text-xs">
                #webdevelopment
              </span>
              <span className="border-2 py-2 px-3 rounded-lg text-xs">
                #internship
              </span>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-start gap-2 px-7 mt-3 rounded-lg p-5">
            <p className="font-medium  ">About Company</p>
            <p className="font-medium text-sm  text-secondary mt-3">Hyteno</p>
            <p className=" text-sm text-black  ">
              Location:
              <span className=" font-medium ">Lalitpur, Nepal</span>
            </p>
            <p className=" text-sm text-black  ">
              Address:
              <span className=" font-medium ">
                Krishna Galli, Pulchowk, Lalitpur
              </span>
            </p>
            <p className=" text-sm text-gray-700">
              Hyteno is dedicated to empowering the restaurant industry through
              digital transformation. Recognizing that the restaurant sector has
              been somewhat left behind in the digital age, particularly in
              comparison to industries like e-commerce, Hyteno
            </p>
            <div className="self-end hover:underline text-secondary">
              <p className="text-end text-sm flex justify-center items-center gap-2  text-secondary ">
                View company Profile <IoIosArrowRoundForward />
              </p>
            </div>
          </div>

          <div className="bg-white flex  justify-between items-center gap-2 px-7 mt-3 rounded-lg p-5">
            <div>
              <div>
                <h4>Are you interested in this Intership?</h4>
                <div className="mt-3">
                  <p className="text-[11px] text-slate-600 ">
                    Application ends:
                  </p>
                  <p className="text-sm font-medium mt-1">November 30, 2024</p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-secondary rounded-lg px-4 py-2 text-white">Apply Now</button>
            </div>
          </div>
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
          <h4 className="text-lg font-medium text-gray-800">MERN Stack Developer Intern</h4>
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
          to={"/:id"}
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
