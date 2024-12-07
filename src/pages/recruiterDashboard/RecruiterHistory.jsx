import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function RecruiterHistory() {
  const educationalInstitutions = [
    "School (SLC, SEE, 1-10, +2, A Levels)",
    "College (Diploma, Bachelor, Master)",
    "Institute",
    "University",
    "Others",
  ];
  const [schoolOption, setSchoolOption] = useState(`All`);
  const [isSchoolOpen, setIsSchoolOpen] = useState(false);

  const handleSchoolOptionClick = (value) => {
    setSchoolOption(value);
    setIsSchoolOpen(false);
  };

  const applications = [
    {
      subject: "Frontend Developer",
      category: "TechCorp",
      description: "In Progress",
      status: "In Progress",
      createdAt: "2024-11-01",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredApplications = applications.filter((app) => {
    if (filter === "All") return true;
    return app.status === filter;
  });

  return (
    <div>
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-medium">Support Ticket</h2>

        <div className="flex flex-col gap-1 mt-1 w-72">
          <div className="relative ">
            <label className="text-sm">Category</label>
            <div className="absolute top-10 right-3 z-10  ">
              <span
                className="flex flex-col gap-[-3px]"
                onClick={() => setIsSchoolOpen(!isSchoolOpen)}
              >
                <IoIosArrowDown className="text-xl text-fontColor" />
              </span>
            </div>
          </div>
          <div
            onMouseLeave={() => setIsSchoolOpen(false)}
            className="relative  "
          >
            {/* Province Dropdown  Trigger */}
            <div
              className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
              onClick={() => setIsSchoolOpen(!isSchoolOpen)}
            >
              {schoolOption}
            </div>
            {/* Province Dropdown Options */}
            {isSchoolOpen && (
              <ul
                onMouseEnter={() => setIsSchoolOpen(true)}
                className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
              >
                {educationalInstitutions.map((i) => (
                  <li
                    key={i}
                    className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                    onClick={() => handleSchoolOptionClick(`${i}`)}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-5 mt-5">
        {[
          "All",
          "Pending",
          "In Progress",
          "Language",
          "Rejected",
          "Resolved",
        ].map((status) => (
          <p
            key={status}
            onClick={() => setFilter(status)}
            className={`text-fontColor font-medium p-2 hover:cursor-pointer ${
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
              <th className="h-12 px-4 text-left align-middle font-medium">
                Subject
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium">
                Category
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium">
                Description
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium">
                Status
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-sm">{app.subject}</td>
                  <td className="p-4 text-sm">{app.category}</td>
                  <td className="p-4 text-sm">{app.description}</td>
                  <td className="p-4 text-sm">{app.status}</td>
                  <td className="p-4 text-sm">{app.createdAt}</td>
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

export default RecruiterHistory;
