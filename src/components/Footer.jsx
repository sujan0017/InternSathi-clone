import { PiCopyrightLight } from "react-icons/pi";
import Logo from "./Logo";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full py-16 bg-[#17171f] flex flex-col items-center">
        <div className="w-full text-white px-5 2xl:px-[142px]">
          <div className="w-full grid grid-col-1  lg:grid-cols-7 gap-8 lg:gap-5 justify-center  pb-16">
            <div className="lg:col-span-2 w-full flex flex-col items-center lg:items-start gap-6 ">
              <Logo />
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-sm">InternSathi - Sathi Edtech Pvt. Ltd</p>
                <p className="text-sm">
                  Krishna Galli, Pulchowk, Lalitpur, Nepal
                </p>
                <p className="text-sm">+977-9802346002</p>
                <p className="text-sm">contact@internsathi.com</p>
              </div>
              <div className="flex flex-col justify-enter items-start gap-3">
                <h2 className="font-medium text-base">
                  Follow Our Social Media
                </h2>
                <div className="w-full flex justify-center lg:justify-start items-center gap-10 pr-2">
                  <CiFacebook className="text-[25px]" />
                  <CiLinkedin className="text-[25px]" />
                  <FaInstagram className="text-[25px]" />
                  <CiTwitter className="text-[25px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h4 className="font-bold mb-2 ">About Internsathi</h4>
              <Link className="hover:underline text-sm">About us</Link>
              <Link className="hover:underline text-sm">Our Services</Link>
              <Link className="hover:underline text-sm">Our Blogs</Link>
              <Link className="hover:underline text-sm">Contact us</Link>
            </div>
            <div className="flex flex-col  gap-2 items-center lg:items-start">
              <h4 className="font-bold mb-2 ">For Candidates</h4>
              <Link className="hover:underline text-sm">
                Build your CV and profile
              </Link>
              <Link className="hover:underline text-sm">Internship/Jobs</Link>
              <Link className="hover:underline text-sm">Browse Events</Link>
            </div>
            <div className="flex flex-col  gap-2 items-center lg:items-start">
              <h4 className="font-bold mb-2 ">For Employers</h4>
              <Link className="hover:underline text-sm">
                Become an Employer
              </Link>
              <Link className="hover:underline text-sm">
                Post New Internship
              </Link>
            </div>
            <div className="flex flex-col  gap-2 items-center lg:items-start">
              <h4 className="font-bold mb-2 ">For Institutes</h4>
              <Link className="hover:underline text-sm">
                Register as Institute
              </Link>
              <Link className="hover:underline text-sm">Organize an event</Link>
            </div>
            <div className="flex flex-col  gap-2 items-center lg:items-start">
              <h4 className="font-bold mb-2 ">About Internsathi</h4>
              <Link className="hover:underline text-sm">Privacy Policy</Link>
              <Link className="hover:underline text-sm">Terms of use</Link>
              <Link className="hover:underline text-sm">FAQs</Link>
            </div>
          </div>
        </div>

        <div className="border-b-2 w-full"></div>

        <section>
          <p className=" text-center text-white  mt-10">
            2024 All Reserved © InternSathi Edtech Pvt. Ltd.
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
