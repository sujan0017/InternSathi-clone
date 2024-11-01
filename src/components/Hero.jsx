import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="px-5 2xl:px-[656px] w-full bg-primary py-16">
      <div className="flex flex-col items-center gap-8 w-full text-white">
        <div className="flex flex-col justify-center items-center text-center text-[48px] font-bold">
          <h1>Join the most popular internship</h1>
          <span>and companies.</span>
        </div>

        <p className="text-center">
          We've helped over 2,500 freshers to get into the most popular
          internships.
        </p>
        <div>
          <form action="" className="max-w-[884px] bg-white rounded-full">
            <div className="flex justify-between items-center p-1 gap-2">
              <div className="px-[16px] py-[12px] bg-red-200 w-48 rounded-full">
                <span className="flex gap-2 justify-center items-center text-secondary">
                  All Opportunities <IoIosArrowDown />{" "}
                </span>
              </div>

              <input
                type="text"
                placeholder="Enter the title, keywords or phrase"
                className=" flex-1 bg-inherit focus:outline-none text-black"
              />

              <div className="size-12 rounded-full bg-secondary flex justify-center items-center">
                <IoIosSearch className="text-4xl" />
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center gap-8 mt-8">
            <h4 className="font-semibold">Popular Searches:</h4>
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
