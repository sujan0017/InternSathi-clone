import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxDoubleArrowDown } from "react-icons/rx";
import { VscAdd } from "react-icons/vsc";

function ProfileEducation() {
  const educationalInstitutions = [
    "School (SLC, SEE, 1-10, +2, A Levels)",
    "College (Diploma, Bachelor, Master)",
    "Institute",
    "University",
    "Others",
  ];
  const citiesInNepal = [
    "Kathmandu",
    "Pokhara",
    "Lalitpur",
    "Biratnagar",
    "Birgunj",
    "Bharatpur",
    "Janakpur",
    "Dharan",
    "Hetauda",
    "Butwal",
    "Nepalgunj",
    "Itahari",
    "Tulsipur",
    "Dhangadhi",
    "Bhairahawa",
    "Gorkha",
    "Palpa",
    "Chitwan",
  ];

  const [showDetails, setShowDetails] = useState(true);

  const [schoolOption, setSchoolOption] = useState(`Select school/institution`);
  const [isSchoolOpen, setIsSchoolOpen] = useState(false);

  const handleSchoolOptionClick = (value) => {
    setSchoolOption(value);
    setIsSchoolOpen(false);
  };

  const [cityOption, setCityOption] = useState("Select a city");
  const [isCityOpen, setCityIsOpen] = useState(false);

  const handleCityOptionClick = (value) => {
    setCityOption(value);
    setCityIsOpen(false);
  };
  return (
    <div className=" w-full rounded-md flex-1 mt-5 overflow-y-auto h-[80lvh]  ">
      <div className="bg-white border rounded-md p-7 flex flex-col">
        <h3 className="font-medium text-xl">Education</h3>
        <p className="text-fontColor text-sm ">
          Give a detailed look into your academic history.
        </p>

        <div className={` flex flex-col mt-5`}>
          
            <div
              onClick={() => setShowDetails(!showDetails)}
              className={`flex items-center justify-between hover:cursor-pointer`}
            >
              <h3 className="font-medium">School/institute</h3>
              <div className="flex gap-5">
                <IoIosArrowDown />
                <RiDeleteBin6Line className="text-xl text-red-500" />
              </div>
            </div>

            <form className={`${showDetails ? "block" : "hidden"} `}>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col gap-1 mt-1">
                  <div className="relative ">
                    <label className="text-sm">
                      School/Institute Type{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="absolute top-10 right-3 z-10  ">
                      <span
                        className="flex flex-col gap-[-3px]"
                        onClick={() => setIsSchoolOpen(!isSchoolOpen)}
                      >
                        <RxDoubleArrowDown className="text-xl text-fontColor" />
                      </span>
                    </div>
                  </div>
                  <div
                    onMouseLeave={() => setIsSchoolOpen(false)}
                    className="relative  "
                  >
                    {/* Province Dropdown  Trigger */}
                    <div
                      className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
                      onClick={() => setIsSchoolOpen(!isSchoolOpen)}
                    >
                      {schoolOption}
                    </div>
                    {/* Province Dropdown Options */}
                    {isSchoolOpen && (
                      <ul
                        onMouseEnter={() => setIsSchoolOpen(true)}
                        className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                      >
                        {educationalInstitutions.map((i) => (
                          <li
                            key={i}
                            className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                            onClick={() => handleSchoolOptionClick(`${i}`)}
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-1 ">
                  <label className="text-sm">
                    School/Institute<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your college/institute"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-3 ">
                <label className="text-sm">
                  Degree<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your college/institute"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-1 mt-3">
                <div className="relative ">
                  <label className="text-sm">
                    City<span className="text-red-500">*</span>
                  </label>
                  <div className="absolute top-10 right-3 z-10  ">
                    <span
                      className="flex flex-col gap-[-3px]"
                      onClick={() => setCityIsOpen(!isCityOpen)}
                    >
                      <RxDoubleArrowDown className="text-xl text-fontColor" />
                    </span>
                  </div>
                </div>
                <div
                  onMouseLeave={() => setCityIsOpen(false)}
                  className="relative  "
                >
                  {/* Province Dropdown  Trigger */}
                  <div
                    className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
                    onClick={() => setCityIsOpen(!isCityOpen)}
                  >
                    {cityOption}
                  </div>
                  {/* Province Dropdown Options */}
                  {isCityOpen && (
                    <ul
                      onMouseEnter={() => setCityIsOpen(true)}
                      className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                    >
                      {citiesInNepal.map((i) => (
                        <li
                          key={i}
                          className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                          onClick={() => handleCityOptionClick(`${i}`)}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-3">
                <div className="flex flex-col gap-1">
                  <label className="text-sm">
                    Start Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm">
                    Graduation Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter you phone number"
                    className="p-3 text-sm border-2 rounded-md"
                  />
                </div>
              </div>

              
              <div className="flex items-center justify-start gap-2 mt-3 ">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 border-2 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-fontColor">
                 I currently study here
                </label>
              </div>
            </form>
         
        </div>

        <div className="flex items-center justify-start gap-2 text-secondary text-sm  mt-3 pt-5 border-t-2">
          <VscAdd /> Add Social Link
        </div>

        <div className="mt-5 self-end">
          <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEducation;
