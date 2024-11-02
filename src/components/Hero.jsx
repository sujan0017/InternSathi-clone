import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="px-5 2xl:px-[56px] w-full bg-primary py-16">
      <div className="flex flex-col items-center gap-8 w-full text-white max-w-[900px] mx-auto">
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
            <div>
              <button className="flex gap-2 justify-center items-center text-secondary px-[16px] py-[12px] bg-red-200 md:w-48 rounded-full w-full">
                All Opportunities <IoIosArrowDown />
              </button>
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
