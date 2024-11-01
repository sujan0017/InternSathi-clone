import { PiCopyrightLight } from "react-icons/pi";
import Logo from "./Logo";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full py-16 bg-[#17171f] flex justify-center items-center">
      <div className="w-full text-white px-5 2xl:px-[142px]">
        <div className="w-full grid grid-col-1  lg:grid-cols-7 gap-8 lg:gap-5 justify-center  pb-16">
          <div className="lg:col-span-2 w-full flex flex-col items-center lg:items-start gap-6 ">
            <Logo />
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p>InternSathi - Sathi Edtech Pvt. Ltd</p>
              <p>Krishna Galli, Pulchowk, Lalitpur, Nepal</p>
              <p>+977-9802346002</p>
              <p>contact@internsathi.com</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-semibold text-lg">Follow Our Social Media</h2>
            <div className="w-full flex justify-center lg:justify-start items-center gap-8">
              <CiFacebook className="text-2xl" />
              <CiLinkedin className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <CiTwitter className="text-2xl" />
            </div>
            </div>
          
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <h4 className="font-bold mb-2 text-xl">About Internsathi</h4>
            <Link className="hover:underline">About us</Link>
            <Link className="hover:underline">Our Services</Link>
            <Link className="hover:underline">Our Blogs</Link>
            <Link className="hover:underline">Contact us</Link>
          </div>
          <div className="flex flex-col  gap-2 items-center lg:items-start">
            <h4 className="font-bold mb-2 text-xl">For Candidates</h4>
            <Link className="hover:underline">Build your CV and profile</Link>
            <Link className="hover:underline">Internship/Jobs</Link>
            <Link className="hover:underline">Browse Events</Link>
          </div>
          <div className="flex flex-col  gap-2 items-center lg:items-start">
            <h4 className="font-bold mb-2 text-xl">For Employers</h4>
            <Link className="hover:underline">Become an Employer</Link>
            <Link className="hover:underline">Post New Internship</Link>
          </div>
          <div className="flex flex-col  gap-2 items-center lg:items-start">
            <h4 className="font-bold mb-2 text-xl">For Institutes</h4>
            <Link className="hover:underline">Register as Institute</Link>
            <Link className="hover:underline">Organize an event</Link>
          </div>
          <div className="flex flex-col  gap-2 items-center lg:items-start">
            <h4 className="font-bold mb-2 text-xl">About Internsathi</h4>
            <Link className="hover:underline">Privacy Policy</Link>
            <Link className="hover:underline">Terms of use</Link>
            <Link className="hover:underline">FAQs</Link>
          </div>
        </div>
        <hr className="border-1 border-white w-full" />
        <div className="w-full flex justify-center items-center text-white gap-[2px] mt-10">
          2024 All Reserved <PiCopyrightLight /> InternSathi Edtech Pvt. Ltd.
        </div>
      </div>
    </div>
  );
}

export default Footer;
