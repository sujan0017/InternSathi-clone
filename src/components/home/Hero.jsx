import { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Hero() {
  const [showMenu, setShowMenu] = useState(false);
  const [addMenu, setAddMenu] = useState("App Opportunities");

  const handleMenuChange = (item) => {
    setAddMenu(item);
    setShowMenu(false);
  };

  return (
    <div className="px-5 2xl:px-[56px] w-full bg-secondary ">
      <div className="flex flex-col items-center gap-8 w-full text-white max-w-[900px] mx-auto py-10 md:py-24">
        <h1 className="text-center text-[33px] md:text-[48px] font-bold ">
          Join the most popular internship and companies.
        </h1>
        <p className="text-center">
          We've helped over 2,500 freshers to get into the most popular
          internships.
        </p>

        <div className="w-full px-2">
          <form
            action=""
            className="w-full bg-white rounded-lg md:rounded-full p-3 md:flex md:items-center md:justify-center md:py-[5px] "
          >
            <div className="relative hover:cursor-pointer">
              <span
                onClick={() => setShowMenu(!showMenu)}
                className="flex gap-2 justify-center items-center text-secondary px-[16px] py-[12px] bg-secondary bg-opacity-20 md:w-48 rounded-full w-full"
              >
                {addMenu} <IoIosArrowDown />
              </span>
              <div
                className={`${
                  showMenu ? "block" : "hidden"
                } bg-white rounded-md border-2 absolute top-14 `}
              >
                <p
                  onClick={() => handleMenuChange("App Opportunities")}
                  className=" text-black p-2  pr-5   hover:bg-secondary hover:bg-opacity-20 hover:text-secondary"
                >
                  App Opportunities
                </p>
                <p
                  onClick={() => handleMenuChange("Event")}
                  className=" text-black p-2  pr-5  hover:bg-secondary hover:bg-opacity-20 hover:text-secondary"
                >
                  Event
                </p>
                <p
                  onClick={() => handleMenuChange("Internship")}
                  className=" text-black p-2  pr-5  hover:bg-secondary hover:bg-opacity-20 hover:text-secondary"
                >
                  Internship
                </p>
                <p
                  onClick={() => handleMenuChange("Job")}
                  className=" text-black p-2 pr-5   hover:bg-secondary hover:bg-opacity-20 hover:text-secondary"
                >
                  Job
                </p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Enter the title, keywords or phrase"
              className="w-full md:w-full bg-inherit focus:outline-none text-black py-2 px-1 "
            />

            <div className=" bg-secondary flex justify-center items-center py-1 md:py-0 rounded-full ">
              <button className="md:size-12 flex justify-center items-center rounded-full ">
                <IoIosSearch className="text-4xl" />
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <h3 className="font-semibold">Popular Searches:</h3>
            <Link className="text-underline">Business development</Link>
            <Link className="text-underline">UI/UX Design</Link>
            <Link className="text-underline">Frontend</Link>
            <Link className="text-underline">Backend</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
