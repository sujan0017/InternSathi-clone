import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";

function ProfileAchievement() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className=" w-full rounded-md flex-1 mt-5 overflow-y-auto h-[80lvh]  ">
      <div className="bg-white border rounded-md p-7 flex flex-col">
        <h3 className="font-medium text-xl">Achievements</h3>
        <p className="text-fontColor text-sm ">
          Add your most notable works and accomplishments to create a stronger
          persona.
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
                Project Title / Designation - Company Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="eg.educational app"
                className="p-3 text-sm border-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label className="text-sm">
               Description
                <span className="text-fontColor pl-2">
                  (Optional)
                </span>
              </label>
              <textarea className="p-3 text-sm border-2 rounded-md h-40" />
            </div>
          </form>

          <div className="flex items-center justify-start gap-2 text-secondary text-sm  mt-3 pt-5 border-t-2">
            <VscAdd /> Add Achievement
          </div>

          <div className="mt-5 self-end">
            <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAchievement;
