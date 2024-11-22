import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Bookmarks() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">My Bookmarks</h2>
      <p className="flex items-center gap-2 text-fontColor text-xs pt-2">
        <Link to="/" className="text-black">
          Dashboard
        </Link>
        <IoIosArrowForward /> Bookmarks
      </p>

      <div className="rounded-md border bg-white mt-5 overflow-y-scroll  lg:overflow-auto ">
       
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
                  Deadline
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
       
      </div>
    </div>
  );
}

export default Bookmarks;
