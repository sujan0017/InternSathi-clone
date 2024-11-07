import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function Register({
  // eslint-disable-next-line react/prop-types
  frontHeader,
  // eslint-disable-next-line react/prop-types
  backHeader,
  // eslint-disable-next-line react/prop-types
  hideItems = "block",
  // eslint-disable-next-line react/prop-types
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  return (
    <section
      className={`px-5 2xl:px-[142px] bg-secondaryBg pt-[120px] relative flex justify-center   lg:justify-end `}
    >
      <h1 className="text-3xl font-medium max-w-[550px] hidden lg:block  pl-5 2xl:pl-[142px] absolute top-[-] left-0 z-10 ">
        {frontHeader}
        <span className="text-secondary"> InternSathi! </span> {backHeader}
      </h1>
      <div className="absolute bottom-0 left-0">
        <div className="w-[350px] relative">
          <img
            className="w-full"
            src="https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-with-bg.521d18b1.png&w=384&q=75"
            alt=""
          />

          <div className="w-[200px] absolute bottom-[350px] left-[550px] hidden lg:block ">
            <img
              className="w-full"
              src="https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow.4d895353.png&w=256&q=75"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-[32px] max-w-[525px] z-10 mb-10  ">
        <h5 className="text-2xl font-medium mb-5">
          Create an account. It's fast & easy.
        </h5>

        <form action="">
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">Email*</label>
              <input
                type="email"
                placeholder={placeholder}
                className="p-3 text-sm border-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 my-3">
              <label className="text-sm">Password*</label>
              <div className="relative w-full ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
              <label className="text-sm">Confirm Password*</label>
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

            <div className="flex items-center justify-between ">
              <div>
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 border-2 border-gray-300 rounded"
                />
                <label className="text-sm font-medium">
                  By clicking the checkbox, you agree to our{" "}
                  <span className="hover:underline text-blue-400">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="hover:underline text-blue-400">
                    Privacy Policy
                  </span>
                </label>
              </div>
            </div>

            <button className="w-full bg-secondary text-white text-sm py-3 rounded-md font-normal mt-3">
              Sign in
            </button>

            <div
              className={`${hideItems} flex items-center my-2 text-gray-500`}
            >
              <div className="border-t-2 w-full"></div>
              <div className="text-xs px-2 w-48">or login with</div>
              <div className="border-t-2 w-full"></div>
            </div>

            <button
              className={`${hideItems} border-2 rounded-md py-2 flex items-center justify-center gap-2`}
            >
              <FcGoogle className="text-2xl" />
              <h5 className="text-base text-center">
                Login with Google{" "}
                <span className="text-xs text-gray-500">{`(candidate)`}</span>
              </h5>
            </button>

            <div className="mt-3">
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link className="text-secondary font-medium">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
