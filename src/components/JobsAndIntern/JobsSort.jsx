import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
function JobsSort() {
  const [showInternList, setShowInternList] = useState(false);
  const [showSortList, setShowSortList] = useState(false);

  const opportunities = ["All Opportunities", "Event", "internship", "Join"];
  return (
    <section className=" w-full px-5 2xl:px-[142px] pt-[88px] pb-[24px] flex items-center gap-6 shadow-md">

      <div className={`relative`}>
        <button
          onClick={() => setShowInternList(!showInternList)}
          className="flex justify-center items-center gap-10 border-2 px-3 py-2 bg-secondary rounded-xl text-white  border-secondary"
        >
          {opportunities[0]} <MdKeyboardArrowDown />
        </button>
        <div
          className={`bg-white w-[174px] p-2 rounded-xl absolute top-14 ${
            showInternList ? "block" : "hidden"
          }  `}
        >
          {opportunities.map((list) => {
            return (
              <ul
                key={list}
                className="py-1 px-2 hover:bg-secondaryBg hover:text-secondary  hover:cursor-pointer"
              >
                {list}
              </ul>
            );
          })}
        </div>
      </div>

      <div className="border-r-2 border-fontColor h-[50px] border-opacity-10 hidden md:block"></div>

      <div className={`relative hidden md:block`}>
        <button
          onClick={() => setShowSortList(!showSortList)}
          className="flex justify-center items-center gap-5 border-2 px-3 py-2 rounded-xl text-"
        >
          Sort <MdKeyboardArrowDown />
        </button>

        <div
          className={`bg-white w-[500px] p-2 rounded-xl absolute top-14 flex flex-col justify-center  ${
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
          <button className="bg-gray-300 text-secondary py-1 mt-5 rounded-md ">
            Show Results
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default JobsSort;
