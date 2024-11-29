import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

function RecruiterAllInternship() {
  const applications = [
    {
      title: "Frontend Developer",
      application: "TechCorp",
      status: "Pending",
      location: "Remote",
      openings: 2,
      createdAt: "2024-11-01",
      deadline: "2024-11-01",
    },
  ];

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortMenu, setSortMenu] = useState("All");
  function handleSortMenu(item) {
    setSortMenu(item);
    setShowSortMenu(false);
  }

  const [showInternshipMenu, setShowInternshipMenu] = useState(false);
  const [internshipMenu, setInternshipMenu] = useState("All");
  function handleInternshipMenu(item) {
    setInternshipMenu(item);
    setShowInternshipMenu(false);
  }

  const [filter, setFilter] = useState("All");

  const filteredApplications = applications.filter((app) => {
    if (filter === "All Jobs") return true;
    return app.status === filter;
  });

  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-2xl font-semibold">My Internships/Jobs Listing</h2>
        <div>
          <button className="text-white bg-secondary rounded-md py-2 px-4 flex items-center justify-center gap-1">
            <IoAddOutline className="text-xl" />
            Post a internship/job
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex  items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-5 relative">
            <div
              onClick={() => setShowInternshipMenu(!showInternshipMenu)}
              className="flex items-center justify-center gap-3 bg-white p-2 rounded-md border hover:cursor-pinter"
            >
              {internshipMenu} <IoIosArrowDown />
            </div>

            <div
              className={`${
                showInternshipMenu ? "block" : "hidden"
              } absolute top-11 left-0 w-40`}
            >
              <ol className="bg-white rounded-md">
                <li
                  onClick={() => handleInternshipMenu("All")}
                  className="py-2 px-4 text-sm hover:bg-secondary hover:bg-opacity-20 hover:cursor-pointer"
                >
                  All
                </li>
                <li
                  onClick={() => handleInternshipMenu("Internship")}
                  className="py-2 px-4 text-sm hover:bg-secondary hover:bg-opacity-20 hover:cursor-pointer"
                >
                  Internship
                </li>
                <li
                  onClick={() => handleInternshipMenu("Job")}
                  className="py-2 px-4 text-sm hover:bg-secondary hover:bg-opacity-20 hover:cursor-pointer"
                >
                  Job
                </li>
              </ol>
            </div>
          </div>

          <div className=" relative w-72 bg-white border rounded-lg">
            <input type="text" className="p-2 w-full " />
            <div className="absolute top-3 right-2 ">
              <CgSearch className="text-xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 relative">
          <span className="text-sm text-fontColor">Sort by:</span>

          <div
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center justify-center gap-3 bg-white p-2 rounded-md border hover:cursor-pinter"
          >
            {sortMenu} <IoIosArrowDown />
          </div>

          <div
            className={`${
              showSortMenu ? "block" : "hidden"
            } absolute top-11 right-0 w-40`}
          >
            <ol className="bg-white rounded-md">
              <li
                onClick={() => handleSortMenu("Nearest Deadline")}
                className="py-2 px-4 text-sm hover:bg-secondary hover:bg-opacity-20 hover:cursor-pointer"
              >
                Nearest Deadline
              </li>
              <li
                onClick={() => handleSortMenu("Newest")}
                className="py-2 px-4 text-sm hover:bg-secondary hover:bg-opacity-20 hover:cursor-pointer"
              >
                Newest
              </li>
              <li
                onClick={() => handleSortMenu("Oldest")}
                className="py-2 px-4 text-sm hover:bg-secondary hover:bg-opacity-20 hover:cursor-pointer"
              >
                Oldest
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-5 mt-5">
        {[
          "All Jobs",
          "Active",
          "Pending",
          "Closed",
          "Rejected",
          "Featured",
        ].map((status) => (
          <p
            key={status}
            onClick={() => setFilter(status)}
            className={`text-fontColor  p-2 hover:cursor-pointer ${
              filter === status
                ? "text-secondary border-b-2 border-secondary"
                : ""
            }`}
          >
            {status}
          </p>
        ))}
      </div>

      <div className="rounded-md border bg-white mt-5 overflow-y-scroll  lg:overflow-auto ">
        <table className="w-full">
          <thead>
            <tr className="border-b w-full">
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                Title
              </th>
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                Applications
              </th>
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                Openings
              </th>
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                Location
              </th>
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                Deadline
              </th>
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                created At
              </th>
              <th className="h-12 px-4 text-left align-middle  text-sm font-normal ">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-sm">{app.title}</td>
                  <td className="p-4 text-sm">{app.application}</td>
                  <td className="p-4 text-sm">{app.openings}</td>
                  <td className="p-4 text-sm">{app.location}</td>
                  <td className="p-4 text-sm">{app.deadline}</td>
                  <td className="p-4 text-sm">{app.createdAt}</td>
                  <td className="p-4 text-sm">{app.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="p-4 align-middle h-24 text-center col-span-7"
                  colSpan="6"
                >
                  <div className="flex flex-col justify-center items-center w-full gap-2">
                    <div className="w-[110px] flex justify-center items-center">
                      <img
                        src="https://internsathi.com/no-result.svg"
                        alt="No results"
                      />
                    </div>
                    <p className="text-sm text-fontColor text-center">
                      No events found
                    </p>
                    <p className="text-sm text-gray-300 text-center">
                      Search other events that may be available
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecruiterAllInternship;
