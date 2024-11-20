import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxDoubleArrowDown } from "react-icons/rx";
import { VscAdd } from "react-icons/vsc";

function ProfileLanguage() {
  const sectors = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Redux",
    "TypeScript",
    "SQL",
    "NoSQL",
    "RESTful APIs",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Git",
    "Linux",
    "Python",
    "Java",
    "C#",
    "Machine Learning",
    "Data Analysis",
    "Cybersecurity",
    "Networking",
    "DevOps",
    "Agile Development",
    "UI/UX Design",
    "Testing and Debugging",
    "Cloud Computing",
    "Version Control",
    "Problem Solving",
    "Project Management"
  ];

  const proficiencyList = ['Basic', 'Conversational', 'Fluent', 'Native']

  const [languageOption, setLanguageOption] = useState("eg.Nepali");
  const [isLanguageOpen, setLanguageIsOpen] = useState(false);

  const handleLanguageOptionClick = (value) => {
    setLanguageOption(value);
    setLanguageIsOpen(false);
  };

  const [proficiencyOption, setProficiencyOption] = useState("eg.Beginner, Intermediate, Expert");
  const [isProficiencyOpen, setProficiencyIsOpen] = useState(false);

  const handleProficiencyOptionClick = (value) => {
    setProficiencyOption(value);
    setProficiencyIsOpen(false);
  };
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className=" w-full rounded-md flex-1 mt-5 overflow-y-auto h-[80lvh]  ">
      <div className="bg-white border rounded-md p-7 flex flex-col">
      <h3 className="font-medium text-xl">Language</h3>
        <p className="text-fontColor text-sm ">
        List a language if you speak more than one.
        </p>
        <div className={` flex flex-col mt-5`}>
          <div
            onClick={() => setShowDetails(!showDetails)}
            className={`flex items-center justify-between hover:cursor-pointer`}
          >
            <div>
            <h3 className="font-medium">Language</h3>
            <p className="text-sm text-fontColor pt-1">Proficiency</p>
            </div>
            <div className="flex gap-5">
              <IoIosArrowDown />
              <RiDeleteBin6Line className="text-xl text-red-500" />
            </div>
          </div>

          <form className={`${showDetails ? "block" : "hidden"} `}>

          <div className="flex flex-col gap-1 mt-5">
            <div className="relative ">
              <label className="text-sm text-fontColor">
                Language<span className="text-red-500">*</span>
              </label>
              <div className="absolute top-10 right-3 z-10  ">
                <span
                  className="flex flex-col gap-[-3px]"
                  onClick={() => setLanguageIsOpen(!isLanguageOpen)}
                >
                  <RxDoubleArrowDown className="text-xl text-fontColor" />
                </span>
              </div>
            </div>

            <div
              onMouseLeave={() => setLanguageIsOpen(false)}
              className="relative  "
            >
              {/* Province Dropdown  Trigger */}
              <div
                className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer text-fontColor "
                onClick={() => setLanguageIsOpen(!isLanguageOpen)}
              >
                {languageOption}
              </div>
              {/* Province Dropdown Options */}
              {isLanguageOpen && (
                <ul
                  onMouseEnter={() => setLanguageIsOpen(true)}
                  className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                >
                  {sectors.map((i) => (
                    <li
                      key={i}
                      className="p-2 text-sm  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                      onClick={() => handleLanguageOptionClick(`${i}`)}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

          <div className="flex flex-col gap-1 mt-5">
            <div className="relative ">
              <label className="text-sm text-fontColor">
                Language Proficiency<span className="text-red-500">*</span>
              </label>
              <div className="absolute top-10 right-3 z-10  ">
                <span
                  className="flex flex-col gap-[-3px]"
                  onClick={() => setProficiencyIsOpen(!isProficiencyOpen)}
                >
                  <RxDoubleArrowDown className="text-xl text-fontColor" />
                </span>
              </div>
            </div>

            <div
              onMouseLeave={() => setProficiencyIsOpen(false)}
              className="relative  "
            >
              {/* Province Dropdown  Trigger */}
              <div
                className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer text-fontColor "
                onClick={() => setProficiencyIsOpen(!isProficiencyOpen)}
              >
                {proficiencyOption}
              </div>
              {/* Province Dropdown Options */}
              {isProficiencyOpen && (
                <ul
                  onMouseEnter={() => setProficiencyIsOpen(true)}
                  className="absolute top-11 w-full h-44 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                >
                  {proficiencyList.map((i) => (
                    <li
                      key={i}
                      className="p-2 text-sm  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                      onClick={() => handleProficiencyOptionClick(`${i}`)}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

          </form>
          <div className="flex items-center justify-start gap-2 text-secondary text-sm  mt-3 pt-5 border-t-2">
            <VscAdd /> Add Language
          </div>

          <div className="mt-5 self-end">
            <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
              Save
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProfileLanguage
