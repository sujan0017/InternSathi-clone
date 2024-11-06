import JobsSort from "../components/JobsAndIntern/JobsSort";

function BrowseEvents() {
  return (
    <section>
      <JobsSort />
      <div className="flex flex-col justify-center items-center h-[80vh] w-full gap-2">
        <div className=" w-[110px] flex justify-center items-center">
          <img src="https://internsathi.com/no-result.svg" alt="" />
        </div>
        <p className=" text-sm text-fontColor text-center">No events found</p>
      <p className=" text-sm text-gray-300 text-center">
        Search other events that may be available
      </p>
      </div>
  
    </section>
  );
}

export default BrowseEvents;
