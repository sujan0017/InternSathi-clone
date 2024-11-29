/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function RecruiterCredit() {
  return (
    <div>
      <RecruiterCreditHeader title={"Membership"} />

      <div className="bg-white rounded-md p-7 flex items-start justify-between">
        <div className="flex flex-col justify-start gap-5">
          <p className="">Your Available Credit</p>

          <div className="p-2 size-16 flex flex-col items-start justify-center bg-secondaryBg rounded-md">
            <p className="text-xs font-thin ">Prepaid</p>
            <p className="text-sm font-semibold ">30</p>
          </div>

          <p className="text-fontColor font-light">
            Upgrade Your Job Search with Free Posting - It's the Smart Choice!
          </p>

          <div className="flex justify-start items-center gap-2">
            <button className="bg-secondary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:cursor-pointer">
              Buy More Credit
            </button>
            <button className="bg-secondaryBg  text-sm font-semibold px-4 py-2 rounded-lg hover:cursor-pointer">
              Change to Postpaid
            </button>
          </div>
        </div>
        <div>
          <button className="bg-secondaryBg  text-sm font-semibold px-4 py-2 rounded-lg hover:cursor-pointer">
            PREPAID
          </button>
        </div>
      </div>

      <div className="mt-7 p-5 grid grid-cols-5 gap-5">
        <div className="bg-white rounded-md p-3 border col-span-3">
          <div className="w-full flex justify-between items-center">
            <h3 className="font-medium">Daily Credit Summary</h3>

            <div className="relative w-52 h-10 rounded-md border border-gray-300 hover:bg-secondaryBg cursor-pointer">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                📅 Pick a date
              </span>
              <input
                type="date"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md p-3 border col-span-2"></div>
      </div>
    </div>
  );
}

export default RecruiterCredit;

export function RecruiterCreditHeader({
  icon,
  textColor = "black",
  title,
  newLink,
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex justify-start items-center gap-3 mt-2 mb-7">
        <Link className="text-xs">Home</Link>
        <IoIosArrowForward />
        <p className="text-xs text-fontColor">Membership</p>
        {icon}
        <p className={`text-xs text-${textColor}`}>{newLink}</p>
      </div>
    </div>
  );
}
