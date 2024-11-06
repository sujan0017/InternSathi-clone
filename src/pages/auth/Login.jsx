import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="px-5 2xl:px-[142px] bg-secondaryBg  pt-[110px] pb-[90px] ">
      <div className="bg-white rounded-xl shadow-md p-[32px] max-w-[496px] mx-auto ">
        <h5 className="text-2xl font-medium mb-5">
          Welcome Back to <span className="text-secondary">Internsathi</span>
        </h5>

        <form action="">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm">Email*</label>
              <input
                type="email"
                placeholder="eg.Janexopper@gmail.com"
                className="p-3 text-sm border-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
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

            <div className="flex items-center justify-between mt-2">
              <div>
                <input  type="checkbox" className="mr-2 w-4 h-4 border-2 border-gray-300 rounded" />
                <label className="text-sm font-medium">Keep me sign in</label>
              </div>

              
              <a className="text-secondary font-medium text-sm" href="">
                Forger Password?
              </a>
            </div>

            <button className="w-full bg-secondary text-white text-sm py-3 rounded-md font-normal mt-2">
              Sign in
            </button>

            <div className="flex items-center my-2 text-gray-500">
              <div className="border-t-2 w-full"></div>
              <div className="text-xs px-2 w-48">or login with</div>
              <div className="border-t-2 w-full"></div>
            </div>

            <button className="border-2 rounded-md py-2 flex items-center justify-center gap-2">
              <FcGoogle className="text-2xl" />
              <h5 className="text-base text-center">
                Login with Google{" "}
                <span className="text-xs text-gray-500">{`(candidate)`}</span>
              </h5>
            </button>

            <div className="mt-2">
              <p className="text-center text-sm text-gray-600">
                Don't have an account? Register as
              </p>
              <div className="flex  justify-center gap-2 mt-2">
                <Link
                  className="text-secondary text-sm hover:underline"
                  to="auth/register-candidate"
                >
                  Candidate{" "}
                </Link>
                <span className="text-secondary">/</span>
                <Link
                  className="text-secondary text-sm hover:underline"
                  to="auth/register-recruiter"
                >
                  Recruiter{" "}
                </Link>
                <span className="text-secondary">/</span>
                <Link
                  className="text-secondary text-sm hover:underline"
                  to="auth/register-institute"
                >
                  Institute{" "}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
