import { useState } from "react";

function EventApplication() {
  const applications = [
    {
      title: "Frontend Developer",
      company: "TechCorp",
      status: "Pending",
      location: "Remote",
      openings: 2,
      appliedDate: "2024-11-01",
    },
    {
      title: "Backend Developer",
      company: "DevSolutions",
      status: "Rejected",
      location: "Kathmandu",
      openings: 1,
      appliedDate: "2024-11-10",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredApplications = applications.filter((app) => {
    if (filter === "All") return true;
    return app.status === filter;
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold">Event Application</h2>

      <div className="w-full flex items-center gap-5 mt-5">
        {["All", "Pending", "Selected", "Rejected"].map((status) => (
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

      <div className="rounded-md border bg-white mt-5">
        <div>
          <table className="w-full">
            <thead>
              <tr className="border-b w-full">
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Title
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Company
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Location
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Openings
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Starting Date
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.length > 0 ? (
                filteredApplications.map((app, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 text-sm">{app.title}</td>
                    <td className="p-4 text-sm">{app.company}</td>
                    <td className="p-4 text-sm">{app.status}</td>
                    <td className="p-4 text-sm">{app.location}</td>
                    <td className="p-4 text-sm">{app.openings}</td>
                    <td className="p-4 text-sm">{app.appliedDate}</td>
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
    </div>
  );
}

export default EventApplication;
