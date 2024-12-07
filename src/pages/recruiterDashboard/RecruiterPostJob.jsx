/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import PostNewInternship from "./PostNewInternship";
import { Link } from "react-router-dom";

function RecruiterPostJob() {
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  return (
    <div className="relative">
      <h3 className="text-2xl font-semibold text-center mb-7">
        Choose what you want to post
      </h3>
      <div className="flex item-center justify-center gap-7 ">
        <div>
          <RecruiterPostJonCart
            href={`/dashboard/company/internship-job/post/internship`}
            handleClick={() => setShowInternshipForm(!showInternshipForm)}
            buttonHeader={`Post Internship`}
            description={`Create an engaging internship post to attract talented students and
                         graduates.`}
            title={`Create an Internship Post`}
            img={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finternship-icon.12f730ce.png&w=32&q=75`}
          />
        </div>

        <RecruiterPostJonCart
          buttonHeader={`Post Job`}
          description={`Post a job opportunity and connect with skilled professionals seeking employment`}
          title={`Create Job Post`}
          img={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-icon.884a3e44.png&w=32&q=75`}
        />

        <div className="absolute top-0 h-[90lvh] w-full bg-black overflow-y-hidden">
          <PostNewInternship />
        </div>  
      </div>
    </div>
  );
}

export default RecruiterPostJob;

export function RecruiterPostJonCart({
  img,
  title,
  description,
  buttonHeader,
  handleClick,
  href,
}) {
  return (
    <div
      className={`bg-white max-w-[288px] rounded-md px-4 py-7 flex flex-col items-center gap-3`}
    >
      <div className="size-16 rounded-full bg-secondaryBg flex items-center justify-center ">
        <img src={img} alt="" />
      </div>
      <p className="font-medium text-center ">{title}</p>
      <p className="text-sm text-fontColor">{description}</p>
      <Link
        to={href}
        onClick={handleClick}
        className="w-full rounded-md bg-secondaryBg py-2 flex items-center justify-center gap-3 font-medium text-sm"
      >
        {buttonHeader} <FaArrowRight />
      </Link>
    </div>
  );
}
