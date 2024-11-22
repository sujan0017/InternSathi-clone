import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
function JobsSort() {
  const [showSortList, setShowSortList] = useState(false);

  return (
    <section className={`w-full px-5 flex items-center gap-6`}>
      <select
        name=""
        id=""
        className="border-2 px-5 py-2 bg-secondary rounded-md text-white  "
        // onChange={(e) => setProductsLimit(e.target.value)}
      >
        <option
          className="py-2 bg-white hover:bg-secondary hover:bg-opacity-30  text-black"
          value="all opportunities"
        >
          All Opportunities
        </option>
        <option
          className="py-2 bg-white hover:bg-secondary hover:bg-opacity-30  text-black mt-2"
          value="Event"
        >
          Events
        </option>
        <option
          className="py-2 bg-white hover:bg-secondary hover:bg-opacity-30  text-black mt-2"
          value="internship"
        >
          Internship
        </option>
        <option
          className="py-2 bg-white hover:bg-secondary hover:bg-opacity-30  text-black mt-2"
          value="job"
        >
          Job
        </option>
      </select>

      <div className="border-r-2 border-fontColor h-[50px] border-opacity-10 hidden md:block"></div>

      <div className={`relative hidden md:block`}>
        <button
          onClick={() => setShowSortList(!showSortList)}
          className="flex justify-center items-center gap-5 border-2 px-3 py-2 rounded-xl text-"
        >
          Sort <MdKeyboardArrowDown />
        </button>

        <div
          className={`bg-white border-2 shadow-sm w-[500px] p-4 rounded-xl absolute top-14 flex flex-col justify-center  ${
            showSortList ? "block" : "hidden"
          }  `}
        >
          <div className="px-3 py-2 border-b-2 flex justify-between w-full">
            <h5 className="font-bold">Sort</h5>
            <p className="text-red-500">Reset</p>
          </div>

          <div className="flex justify-start gap-5 pt-5 pb-10 border-b-2  ">
            <span className=" p-2  border rounded-lg ">Newest</span>
            <span className=" p-2  border rounded-lg ">Newest</span>
            <span className=" p-2  border rounded-lg ">Newest</span>
          </div>
          <button className="bg-gray-200 text-secondary py-2 mt-5 rounded-md ">
            Show Results
          </button>
        </div>
      </div>
    </section>
  );
}

export default JobsSort;
