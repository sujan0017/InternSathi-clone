/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import FormNormal, {
  FormLevelOne,
  FormLevelOneButton,
  FormLevelTwo,
} from "../../components/Form/FormNormal";

function PostNewInternship({ showInternshipForm, setShowInternshipForm }) {
  const internshipLocation = ["Hybrid", "OnSite", "Remote"];
  const internshipType = ["Full Time", "Part Time", "Contract"];
  const internshipLevel = ["Entry", "Junior", "Mid", "Senior"];
  const citiesInNepal = [
    "Kathmandu",
    "Pokhara",
    "Lalitpur",
    "Bhaktapur",
    "Biratnagar",
    "Birgunj",
    "Dharan",
    "Hetauda",
    "Butwal",
    "Nepalgunj",
    "Dhangadhi",
    "Janakpur",
    "Itahari",
    "Tulsipur",
    "Bharatpur",
    "Ghorahi",
    "Bhimdatta",
    "Kalaiya",
    "Rajbiraj",
    "Lahan",
    "Gorkha",
    "Palpa",
    "Beni",
    "Baglung",
    "Jumla",
    "Dhankuta",
    "Ilam",
    "Syangja",
    "Khandbari",
    "Damauli",
  ];
  const internshipSectors = [
    "Web Development",
    "Mobile App Development",
    "Data Science and Analytics",
    "Cloud Computing",
    "Cybersecurity",
    "Database Management",
    "Artificial Intelligence and Machine Learning",
    "Quality Assurance and Testing",
    "UI/UX Design",
    "Software Development",
    "IT Support and Maintenance",
    "Digital Marketing and SEO",
    "Project Management",
    "Game Development",
    "Blockchain Development",
  ];
  const months = [
    "Hourly",
    "Daily",
    "Weekly",
    "Monthly",
    "Annually",
    "Biannually",
    "Negotiable",
  ];
  const monthsMax = ["Monthly", "yearly"];

  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  function handleClickCity(city) {
    setSelectedCity(city);
    setIsCityOpen(false);
  }

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLocationMenu, setIsLocationMenu] = useState("OnSite");
  const handleLocationOptionClick = (value) => {
    setIsLocationMenu(value);
    setIsLocationOpen(false);
  };

  const [isInternSectorOpen, setIsInternSectorOpen] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState("");
  function handleClickInternSector(city) {
    setSelectedIntern(city);
    setIsInternSectorOpen(false);
  }

  const [isInternTypeOpen, setIsInternTypeOpen] = useState(false);
  const [selectedInternType, setSelectedInternType] = useState("Full Time ");
  function handleClickInternType(item) {
    setSelectedInternType(item);
    setIsInternTypeOpen(false);
  }
  const [isInternLevelOpen, setIsInternLevelOpen] = useState(false);
  const [selectedInternLevel, setSelectedInternLevel] = useState("Entry");
  function handleClickInternLevel(item) {
    setSelectedInternLevel(item);
    setIsInternLevelOpen(false);
  }

  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Monthly");
  function handleClickMonth(item) {
    setSelectedMonth(item);
    setIsMonthOpen(false);
  }
  const [isMonthlyMaxOpen, setIsMonthlyMaxOpen] = useState(false);
  const [selectedMonthlyMax, setSelectedMonthlyMax] = useState("Monthly");
  function handleClickMonthlyMax(item) {
    setSelectedMonthlyMax(item);
    setIsMonthlyMaxOpen(false);
  }

  function handleAutoCloseMenu() {
    setIsCityOpen(false);
    setIsLocationOpen(false);
    setIsInternSectorOpen(false);
    setIsInternTypeOpen(false);
    setIsInternLevelOpen(false);
    setIsMonthOpen(false);
  }

  return (
    <div className="bg-secondaryBg  w-full h-full ">
      <div className="flex item-center justify-between">
        <h3 className="text-xl font-semibold text-center">
          Create an Internship Post
        </h3>
        <FaCircleArrowLeft
          onClick={() => setShowInternshipForm(!showInternshipForm)}
          className="text-2xl text-gray-300 hover:cursor-pointer"
        />
      </div>

      <div className=" rounded-md p-7 mt-5 h-[85lvh] bg-white  overflow-y-auto">
        <h5 className="font-semibold">Basic Details</h5>

        <form onMouseUpCapture={handleAutoCloseMenu} className="">
          <FormNormal
            title={`Internship Title`}
            placeholder={`eg.Web developer intern`}
            type={"text"}
          />

          <div className="w-full grid sm:grid-cols-2 gap-5 ">
            <FormLevelOne
              mappingValue={citiesInNepal}
              handleClickEvent={handleClickCity}
              isMenuOpen={isCityOpen}
              value={selectedCity}
              title={`City`}
              placeHolder={`eg.Kathmandu`}
              toggleSwitch={() => setIsCityOpen(!isCityOpen)}
              required={`*`}
            />

            <FormLevelTwo
              mappingValue={internshipLocation}
              handleClickEvent={handleLocationOptionClick}
              isMenuOpen={isLocationOpen}
              value={isLocationMenu}
              title={`Internship Location`}
              toggleSwitch={() => setIsLocationOpen(!isLocationOpen)}
              required={`*`}
            />
          </div>

          <div>
            <FormLevelOne
              mappingValue={internshipSectors}
              handleClickEvent={handleClickInternSector}
              isMenuOpen={isInternSectorOpen}
              value={selectedIntern}
              title={`Internship Sector`}
              placeHolder={`Select Sector`}
              toggleSwitch={() => setIsInternSectorOpen(!isInternSectorOpen)}
              required={`*`}
            />
            <FormNormal
              required={`*`}
              title={`Application Deadline`}
              type={"date"}
            />
          </div>

          <div className="w-full grid sm:grid-cols-2 gap-5 ">
            <FormLevelTwo
              mappingValue={internshipType}
              handleClickEvent={handleClickInternType}
              isMenuOpen={isInternTypeOpen}
              value={selectedInternType}
              title={`Internship Type`}
              toggleSwitch={() => setIsInternTypeOpen(!isInternTypeOpen)}
              required={`*`}
            />
            <FormLevelTwo
              mappingValue={internshipLevel}
              handleClickEvent={handleClickInternLevel}
              isMenuOpen={isInternLevelOpen}
              value={selectedInternLevel}
              title={`Internship Level`}
              toggleSwitch={() => setIsInternLevelOpen(!isInternLevelOpen)}
            />
          </div>

          <FormNormal
            title={`Number Of Openings`}
            placeholder={`eg. 4`}
            type={"number"}
            required={`*`}
          />

          <div className="w-full grid sm:grid-cols-2 gap-5">
            <FormLevelOneButton
              mappingValue={months}
              handleClickEvent={handleClickMonth}
              isMenuOpen={isMonthOpen}
              value={selectedMonth}
              title={`Min`}
              placeHolder={`15000`}
              toggleSwitch={() => setIsMonthOpen(!isMonthOpen)}
              required={`*`}
            />
            <FormLevelOneButton
              mappingValue={monthsMax}
              handleClickEvent={handleClickMonthlyMax}
              isMenuOpen={isMonthlyMaxOpen}
              value={selectedMonthlyMax}
              title={`Max`}
              placeHolder={`400000`}
              toggleSwitch={() => setIsMonthlyMaxOpen(!isMonthlyMaxOpen)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostNewInternship;
