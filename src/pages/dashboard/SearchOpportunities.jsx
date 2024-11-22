import { IoSearchOutline } from "react-icons/io5";
import JobsSort from "../../components/JobsAndIntern/JobsSort";
import JobsSection from "../../components/JobsAndIntern/JobsSection";

function SearchOpportunities() {
  return (
    <div className="overflow-y-auto h-[92vh]">
      <h3 className="text-2xl font-bold ">{`Search all Opportunities`}</h3>
      <div className="w-full bg-white flex items-center gap-2 p-2 rounded-md border mt-[24px]">
        <IoSearchOutline />
        <input
          placeholder="Search Opportunities"
          type="text"
          className="flex-1"
        />
      </div>
      <div className="pt-[24px]">
        <JobsSort />
      </div>

      <div className="">
        <JobsSection />
      </div>
    </div>
  );
}

export default SearchOpportunities;
