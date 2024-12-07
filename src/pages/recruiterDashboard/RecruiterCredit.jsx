import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowBack,
} from "react-icons/io";
import { Link } from "react-router-dom";

function RecruiterCredit() {
  const [showLimit, setShowLimit] = useState(false);
  const [limitMenu, setLimitMenu] = useState(5);

  function handleLimitMenu(item) {
    setLimitMenu(item);
    setShowLimit(false);
  }

  const values = [50, 100, 500, 1000, 5000, 10000, "Custom"];
  const [currentValue, setCurrentValue] = useState(values[0]); // Default value

  const handleSliderChange = (e) => {
    const index = e.target.value; // Get the slider position (index)
    setCurrentValue(values[index]); // Map to the corresponding value
  };

  const [showCreditMenu, setShowCreditMenu] = useState(false);

  return (
    <div className="w-full h-[85lvh] overflow-y-auto relative">
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
            <button
              onClick={() => setShowCreditMenu(!showCreditMenu)}
              className="bg-secondary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:cursor-pointer"
            >
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

      <div
        className={` ${
          showCreditMenu ? "hidden" : "block"
        } mt-7 grid grid-cols-5 gap-5`}
      >
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

        <div className="bg-white rounded-md p-5 border col-span-2">
          <h3 className="font-medium ">Usage Detail</h3>
          <div className="mt-10 mb-16">
            <div className="flex items-end gap-1">
              <p className="text-3xl font-bold">30</p>
              <p className="text-xl text-gray-700 font-light ">Credit</p>
            </div>
            <p className="text-sm text-fontColor">Used till now</p>
          </div>
          <div className="mb-5">
            <div className="flex flex-col items-start ">
              <RecruiterCreditCart title={"Job Listing Creation"} value={5} />
              <RecruiterCreditCart title={"Job Listing Creation"} value={5} />
              <RecruiterCreditCart title={"Job Listing Creation"} value={5} />
              <RecruiterCreditCart title={"Job Listing Creation"} value={5} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          showCreditMenu ? "hidden" : "block"
        } bg-white rounded-md mt-7 p-3`}
      >
        <h3 className="text-medium ">Billing History</h3>
        <div className="rounded-md border bg-white mt-5 overflow-y-scroll  lg:overflow-auto my-3 ">
          <table className="w-full">
            <thead className="bg-secondaryBg">
              <tr className="border-b w-full">
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                  Invoiced id
                </th>
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                  Payment Gateway
                </th>
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                  Package
                </th>
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                  Credit
                </th>
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                  Amount
                </th>
                <th className="h-12 px-4 text-left align-middle  text-sm font-normal "></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-sm">INV-245190691</td>
                <td className="p-4 text-sm">others</td>
                <td className="p-4 text-sm">NORMAL</td>
                <td className="p-4 text-sm">30</td>
                <td className="p-4 text-sm">
                  <span className="font-normal text-green-500  bg-green-100 rounded-md py-1 px-2 uppercase">
                    Paid
                  </span>
                </td>
                <td className="p-4 text-sm">Rs. 0</td>
                <td className="p-4 text-sm">
                  <span className="p-2 rounded-md hover:bg-secondary hover:bg-opacity-25 hover:text-secondary">
                    View Invoice
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-sm">Rows per pages</p>
          <div>
            <div className=" relative">
              <span
                onClick={() => setShowLimit(!showLimit)}
                className="border-2 p-2 rounded-md flex items-center gap-3 hover:cursor-pointer"
              >
                <p>{limitMenu}</p>
                <IoIosArrowDown />
              </span>
              <div
                className={`${
                  showLimit ? "block" : "hidden"
                } bg-white rounded-md shadow-md absolute bottom-0 right-0 hover:cursor-pointer`}
              >
                <p
                  onClick={() => handleLimitMenu(5)}
                  className="pl-3 py-1 pr-8  hover:bg-secondary hover:bg-opacity-25 hover:text-secondary"
                >
                  5
                </p>
                <p
                  onClick={() => handleLimitMenu(10)}
                  className="pl-3 py-1 pr-8  hover:bg-secondary hover:bg-opacity-25 hover:text-secondary"
                >
                  10
                </p>
                <p
                  onClick={() => handleLimitMenu(25)}
                  className="pl-3 py-1 pr-8  hover:bg-secondary hover:bg-opacity-25 hover:text-secondary"
                >
                  25
                </p>
              </div>
            </div>
          </div>
          <p>1 - 1</p>
          <div className="flex items-center gap-5 pl-2">
            <IoIosArrowBack className="text-xl" />{" "}
            <IoIosArrowForward className="text-xl" />
          </div>
        </div>
      </div>

      <div
        className={`${
          showCreditMenu ? "block" : "hidden"
        } w-full h-full bg-secondaryBg border rounded-md p-5  absolute top-0 `}
      >
        <IoMdArrowBack
          className="text-2xl hover:cursor-pointer"
          onClick={() => setShowCreditMenu(!showCreditMenu)}
        />
        <p className="text-[22px] font-semibold mt-5 ">Choose Credit Package</p>
        <p className="">Price Depends on the Volume</p>

        <div className="grid grid-cols-4 mt-5 p-5">

          <div className="col-span-3 flex flex-col items-center justify-center gap-5  ">
            <span className="text-secondary bg-secondary bg-opacity-15 p-2 rounded-md">
              Includes 5% discount
            </span>

            <h2 className="text-[27px] font-bold">500 Internsathi Credit</h2>

            <div className="flex flex-col items-center justify-center w-full">
              <div className="relative w-full max-w-xl ">
                {/* Range Slider */}
                <input
                  id="range"
                  type="range"
                  min="0"
                  max={values.length - 1}
                  step="1"
                  value={values.indexOf(currentValue)}
                  onChange={handleSliderChange}
                  className="w-full accent-blue-500"
                />

                {/* Markers below the slider */}
                <div className="flex justify-between">
                  {values.map((value, index) => (
                    <span
                      key={index}
                      className={`text-sm font-semibold ${
                        currentValue === value
                          ? "text-blue-500 font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-2 rounded-md bg-secondary bg-opacity-15 border-blue-500 p-3 min-w-96">
              <p className="text-xs font-semibold">Need More Credit?</p>
              <p className="text-xs  mt-1">
                Please{" "}
                <span className="text-blue-500 underline">Contact us</span> for
                a custom plan.
              </p>
            </div>
          </div>

          <div className="col-span-1 bg-white rounded-md p-5">
            <h5 className="font-semibold">Purchase Summary</h5>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm">Credit Volume</p>
              <p className="font-semibold">{currentValue}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm">Per Credit</p>
              <p className="font-semibold">Rs 10</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm">Discount </p>
              <p className="font-semibold">5%</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm">VAT</p>
              <p className="font-semibold">13%</p>
            </div>
            <div className="border-t-2 my-7"></div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm">Total</p>
              <p className="font-semibold">Rs. 1919.25</p>
            </div>
            <button className="text-sm font-semibold bg-secondary mx-2 w-full text-white py-2 rounded-md mt-5">
              Continue to checkout
            </button>
          </div>
        </div>
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

// eslint-disable-next-line react/prop-types
export function RecruiterCreditCart({ title, value }) {
  return (
    <div className="w-full py-2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p>{title}</p>{" "}
          <HiOutlineExclamationCircle className="text-fontColor" />
        </div>
        <p className="font-normal">{value}</p>
      </div>
      <div className="bg-fontColor bg-opacity-50 rounded-full h-1 mt-5"></div>
    </div>
  );
}
