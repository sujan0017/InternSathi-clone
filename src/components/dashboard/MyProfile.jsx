import { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";
import { GrAchievement } from "react-icons/gr";
import {
  IoBagCheckOutline,
  IoLanguageOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { MdRocketLaunch } from "react-icons/md";

import { Link } from "react-router-dom";
import ProfileAbout from "./profile/ProfileAbout";
import ProfileEducation from "./profile/ProfileEducation";
import ProfileProject from "./profile/ProfileProject";
import ProfileExperience from "./profile/ProfileExperience";
import ProfileSkills from "./profile/ProfileSkills";
import ProfileAchievement from "./profile/ProfileAchievement";
import ProfileTraining from "./profile/ProfileTraining";
import ProfileLanguage from "./profile/ProfileLanguage";
import ProfileEmailPhone from "./profile/ProfileEmailPhone";

function MyProfile() {
  const [menu, setMenu] = useState("about");

  return (
    <section className="w-full h-full">
      <h3 className="text-2xl font-bold ">{`My Profile`}</h3>

      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="mt-5 w-full  flex gap-2 lg:flex-col lg:h-[83vh] lg:max-w-64 overflow-y-scroll  lg:overflow-auto  ">
          <div>
            <Link
              onClick={() => setMenu("about")}
              className={`flex items-center justify-start gap-5 ${
                menu === "about" ? "text-secondary  bg-white" : "text-fontColor"
              }  py-2  px-2 rounded-md font-medium`}
            >
              <IoPersonOutline className="text-xl" />
              About
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("education")}
              className={`${
                menu === "education" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  lg:py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <FaGraduationCap className="text-xl" />
              Education
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("project")}
              className={`${
                menu === "project" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <MdRocketLaunch className="text-xl" />
              Projects
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("experience")}
              className={`${
                menu === "experience" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <IoBagCheckOutline className="text-xl" />
              Experience
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("skills")}
              className={`${
                menu === "skills" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <GoLightBulb className="text-xl" />
              Skills
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("achievement")}
              className={`${
                menu === "achievement" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <GrAchievement className="text-xl" />
              Achievement
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("training")}
              className={`${
                menu === "training" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <FaChalkboardTeacher className="text-xl" />
              Training
            </Link>
          </div>

          <div>
            <Link
              onClick={() => setMenu("language")}
              className={`${
                menu === "language" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1`}
            >
              <IoLanguageOutline className="text-xl" />
              Language
            </Link>
          </div>

          <div className="min-w-48">
            <Link
              onClick={() => setMenu("emailPhone")}
              className={`${
                menu === "emailPhone" ? "text-secondary  bg-white" : ""
              }  flex items-center justify-start gap-5 text-fontColor  py-2 hover:bg-white px-2 rounded-md font-medium mt-1 `}
            >
              <CiMobile3 className="text-xl" />
              Email and Phone
            </Link>
          </div>
          
        </div>

        <div className="flex-1">
          {menu === "about" && <ProfileAbout />}
          {menu === "education" && <ProfileEducation />}
          {menu === "project" && <ProfileProject />}
          {menu === "experience" && <ProfileExperience />}
          {menu === "skills" && <ProfileSkills />}
          {menu === "achievement" && <ProfileAchievement />}
          {menu === "training" && <ProfileTraining />}
          {menu === "language" && <ProfileLanguage />}
          {menu === "emailPhone" && <ProfileEmailPhone />}
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
