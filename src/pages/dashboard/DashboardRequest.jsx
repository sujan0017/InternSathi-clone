import { useState } from "react";
import { CgSearch } from "react-icons/cg";

function DashboardRequest() {
  const applications = [
    {
      name: "Frontend Developer",
      type: "TechCorp",
      status: "Degree",
      createdAt: "2024-11-01",
    },
    {
      name: "Backend Developer",
      type: "DevSolutions",
      status: "Language",
      createdAt: "2024-11-10",
    },
    {
      name: "Backend Developer",
      type: "DevSolutions",
      status: "Skill",
      createdAt: "2024-11-10",
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
        <h2 className="text-2xl font-medium">Custom Value Requests</h2>
        <div className="relative w-60">
          <input
            type="text"
            placeholder="Search..."
            className="text-sm p-3 border rounded-md w-full z-0 "
          />
          <span className="absolute top-3 right-3">
            <CgSearch className="text-xl" />
          </span>
        </div>
      </div>

      <div className="w-full flex items-center gap-5 mt-5">
        {[
          "All",
          "Degree",
          "Institute",
          "Language",
          "Sector",
          "Skill",
          "Firm",
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
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Type
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
                    <td className="p-4 text-sm">{app.name}</td>
                    <td className="p-4 text-sm">{app.type}</td>
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

export default DashboardRequest;
