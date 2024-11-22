import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";

function ProfileProject() {
  const [showDetails, setShowDetails] = useState(true);
  const [isRunning, setIsRunning] = useState(true);

  return (
    <div className=" w-full rounded-md flex-1 mt-5 overflow-y-auto h-[80lvh]  ">
      <div className="bg-white border rounded-md p-7 flex flex-col">
        <h3 className="font-medium text-xl">Work Experience</h3>
        <p className="text-fontColor text-sm ">
          Include your career history. Give a brief insight into the role you
          played and mention at least 3 to 5 responsibilities you carried out at
          each workplace.
        </p>

        <div className={` flex flex-col mt-5`}>
          <div
            onClick={() => setShowDetails(!showDetails)}
            className={`flex items-center justify-between hover:cursor-pointer`}
          >
            <h3 className="font-medium">Title</h3>
            <div className="flex gap-5">
              <IoIosArrowDown />
              <RiDeleteBin6Line className="text-xl text-red-500" />
            </div>
          </div>

          <form className={`${showDetails ? "block" : "hidden"} `}>
            <div className="flex flex-col gap-1 mt-3 ">
              <label className="text-sm">
                Title / Designation
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="eg.Software Developer"
                className="p-3 text-sm border-2 rounded-md"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm">
                  Start Date<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  placeholder="Enter you phone number"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
              <div
                className={`${
                  isRunning ? " block" : "hidden"
                } flex flex-col gap-1`}
              >
                <label className="text-sm">
                  End Date<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  placeholder="Enter you phone number"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </div>

            <div
              onClick={() => setIsRunning(!isRunning)}
              className="flex items-center justify-start gap-2 mt-3 "
            >
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 border-2 border-gray-300 rounded"
              />
              <label className="text-sm font-medium text-fontColor">
                Currently Ongoing
              </label>
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label className="text-sm">
                Project Description
                <span className="text-fontColor pl-2">
                  (Use bullet points for clarity)
                </span>
              </label>
              <textarea className="p-3 text-sm border-2 rounded-md h-40" />
            </div>
          </form>
        </div>

        <div className="flex items-center justify-start gap-2 text-secondary text-sm  mt-3 pt-5 border-t-2">
          <VscAdd /> Add Experience
        </div>

        <div className="mt-5 self-end">
          <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileProject;
