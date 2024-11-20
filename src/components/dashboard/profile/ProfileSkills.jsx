import { useState } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

function ProfileSkills() {
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
  const [skillOption, setSkillOption] = useState("Select your skills");
  const [isSkillOpen, setSkillIsOpen] = useState(false);

  const handleSkillOptionClick = (value) => {
    setSkillOption(value);
    setSkillIsOpen(false);
  };
  return (
    <div className=" w-full rounded-md flex-1 mt-5 overflow-y-auto h-[80lvh]  ">
      <div className="bg-white border rounded-md p-7 flex flex-col">
        <h3 className="font-medium text-xl">Skills</h3>
        <p className="text-fontColor text-sm ">
          Only list relevant skills. E.g. communication, computer, leadership,
          organizational or problem-solving skills.
        </p>
        <form>
          <div className="flex flex-col gap-1 mt-5">
            <div className="relative ">
              <label className="text-sm">
                Skills<span className="text-red-500">*</span>
              </label>
              <div className="absolute top-10 right-3 z-10  ">
                <span
                  className="flex flex-col gap-[-3px]"
                  onClick={() => setSkillIsOpen(!isSkillOpen)}
                >
                  <RxDoubleArrowDown className="text-xl text-fontColor" />
                </span>
              </div>
            </div>

            <div
              onMouseLeave={() => setSkillIsOpen(false)}
              className="relative  "
            >
              {/* Province Dropdown  Trigger */}
              <div
                className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
                onClick={() => setSkillIsOpen(!isSkillOpen)}
              >
                {skillOption}
              </div>
              {/* Province Dropdown Options */}
              {isSkillOpen && (
                <ul
                  onMouseEnter={() => setSkillIsOpen(true)}
                  className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                >
                  {sectors.map((i) => (
                    <li
                      key={sectors}
                      className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                      onClick={() => handleSkillOptionClick(`${i}`)}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
          
        </form>
      </div>
    </div>
  );
}

export default ProfileSkills;
