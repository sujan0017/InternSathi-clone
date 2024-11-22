import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";

function DashboardSetting() {
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  return (
    <div className="">
      <h4 className="text-xl font-medium ">Setting</h4>
      <div className="mt-5 grid sm:grid-cols-2 gap-5 ">
        <div className="p-5 flex flex-col justify-start border bg-white rounded-md">
          <h5 className="font-medium">Change Your Password</h5>
          <form action="">
            <div className="flex flex-col gap-1 my-3 ">
              <label className="text-sm">
                Old Passwords <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full ">
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Enter your old password"
                  className="p-3 text-sm border-2 rounded-md w-full"
                />
                <span
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute top-4 right-4"
                >
                  {showOldPassword ? (
                    <FaRegEye className="text-lg text-gray-400" />
                  ) : (
                    <FiEyeOff className=" text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 my-3 ">
              <label className="text-sm">
                New Password<span className="text-red-500">*</span>
              </label>
              <div className="relative w-full ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="p-3 text-sm border-2 rounded-md w-full"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-4"
                >
                  {showPassword ? (
                    <FaRegEye className="text-lg text-gray-400" />
                  ) : (
                    <FiEyeOff className=" text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-3">
              <label className="text-sm">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative w-full ">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="p-3 text-sm border-2 rounded-md w-full"
                />
                <span
                  onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                  className="absolute top-4 right-4"
                >
                  {showConfirmPassword ? (
                    <FaRegEye className="text-lg text-gray-400" />
                  ) : (
                    <FiEyeOff className=" text-gray-400" />
                  )}
                </span>
              </div>
            </div>
          </form>

          <div className="self-end mt-5">
            <button className="px-3 py-2 bg-secondary text-white rounded-md">
              Save Change
            </button>
          </div>
        </div>

        <div className="border bg-white rounded-md p-5 ">
          <p className="font-medium ">Notification Setting</p>
          <ul className="flex flex-col gap-5 mt-5">
            <li>All notification</li>
            <li>Notify me on new Internship post</li>
            <li>Notify me on new event post</li>
            <li>Notify me on Application Invitation</li>
            <li>Notify me on preferred Internship</li>
            <li>Notify me on preferred Job</li>
          </ul>
        </div>
      </div>

      <div className="mt-7">
        <h4 className="text-xl font-medium ">Danger Zone</h4>
        <div className="bg-red-100 rounded-md p-5 mt-5 flex justify-between items-end  border border-red-500">
          <div>
            <p className="font-medium text-red-500 ">Deactivate Account</p>
            <p className="text-sm mt-2 text-fontColor">
              Once you deactivate this account, there is no going back. Please
              be certain.
            </p>
          </div>
          <div className="self-end mt-5">
            <button className="px-3 py-2 bg-secondary text-white rounded-md">
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSetting;
