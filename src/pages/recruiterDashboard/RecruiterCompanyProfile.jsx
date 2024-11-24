import { RiUploadLine } from "react-icons/ri";
import { PiCopy } from "react-icons/pi";
import { useState } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";
import { LuUploadCloud } from "react-icons/lu";

function RecruiterCompanyProfile() {
  const provincesOfNepal = [
    "Province No. 1",
    "Madhesh Province",
    "Bagmati Province",
    "Gandaki Province",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim Province",
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
  const socialMediaPlatforms = [
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "TikTok",
    "Snapchat",
    "Pinterest",
    "Reddit",
    "YouTube",
    "WhatsApp",
    "Telegram",
    "Discord",
    "WeChat",
    "Tumblr",
    "Quora",
    "Flickr",
    "Clubhouse",
    "Threads",
    "Xing",
    "Medium",
  ];

  const [ProvinceOption, setProvinceOption] = useState("Select Province");
  const [isProvinceOpen, setProvinceIsOpen] = useState(false);
  const handleProvinceOptionClick = (value) => {
    setProvinceOption(value);
    setProvinceIsOpen(false);
  };

  const [cityOption, setCityOption] = useState("Select a city");
  const [isCityOpen, setCityIsOpen] = useState(false);
  const handleCityOptionClick = (value) => {
    setCityOption(value);
    setCityIsOpen(false);
  };

  const [socialOption, setSocialOption] = useState("Social Media");
  const [isSocialOpen, setSocialIsOpen] = useState(false);
  const handleSocialOptionClick = (value) => {
    setSocialOption(value);
    setSocialIsOpen(false);
  };

  return (
    <section className="w-full h-[85lvh] overflow-y-auto">
      <h3 className="text-2xl font-bold ">{`Company Profile`}</h3>
      <div className="">
        {/* about company */}
        <div className="bg-white border rounded-md p-7 flex flex-col mt-5 ">
          <h2 className="text-xl font-medium ">About Company</h2>
          <div className="flex  items-center justify-start gap-5 mt-5">
            <div className="size-16 rounded-full bg-secondaryBg flex items-center justify-center ">
              <img
                src="https://internsathi.com/_next/image?url=https%3A%2F%2Fapi.internsathi.com%2Fuploads%2F1730115089799-94261846.png&w=128&q=75"
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="text-secondary font-semibold flex items-center justify-start gap-2">
              <RiUploadLine />
              Upload profile Picture
            </div>
          </div>

          <form className="flex  flex-col gap-5 mt-5 ">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Company<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Enter company name"
                  type="text"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Industry<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="eg.Software development"
                  type="text"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Found Date<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Company Size<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="eg. 0-5 Employee"
                  type="text"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                type="date"
                className="p-3 text-sm border-2 rounded-md h-52"
              />
            </div>

            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">
                Website URL<span className="text-red-500">*</span>
              </label>
              <input type="text" className="p-3 text-sm border-2 rounded-md" />
            </div>

            <div className="flex flex-col gap-1 mt-1 ">
              <p className="text-sm">
                Profile URL<span className="text-red-500">*</span>
              </p>
              <div className="flex items-center gap-3 ">
                <p>https://internsathi.com/company/</p>
                <p className="border p-2 rounded-md">
                  bksujan1215recruiter781825
                </p>
                <PiCopy className="text-xl" />
              </div>
            </div>
          </form>

          <div className="mt-5 self-end">
            <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
              Save
            </button>
          </div>
        </div>

        {/* Email and phone */}
        <div className=" w-full rounded-md flex-1 mt-5   ">
          <div className="bg-white border rounded-md p-7 flex flex-col">
            <h3 className="font-medium text-xl">Email and Phone</h3>
            <p className="text-fontColor text-sm ">
              Update and verify your Email and Phone
            </p>
            <form action="">
              <div className="flex flex-col gap-1 mt-5 ">
                <label className="text-sm">
                  Email address<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-5">
                  <input
                    type="email"
                    placeholder="eg.admain@gmail.com"
                    className="p-3 text-sm border-2 rounded-md w-1/2"
                  />
                  <div className="">
                    <button className="bg-secondary text-white px-7 py-3 font-normal rounded-md">
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-5 ">
                <label className="text-sm">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-5">
                  <input
                    type="number"
                    placeholder="eg.9800000000"
                    className="p-3 text-sm border-2 rounded-md w-1/2"
                  />
                  <div className="">
                    <button className="bg-secondary text-white px-7 py-3 font-normal rounded-md">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* upload company image */}
        <div className="bg-white border border-gray-200 shadow-md rounded-md p-7 flex flex-col mt-5 space-y-5">
          <h3 className="text-2xl font-semibold text-gray-800">{`Company images`}</h3>
          <div className="p-4 rounded-md bg-fontColor bg-opacity-20 border w-48">
            <div className="relative">
              {/* Hidden file input */}
              <input
                type="file"
                id="resumeUpload"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])} // Optional: Handle file selection
              />
              {/* Custom button */}
              <label
                htmlFor="resumeUpload"
                className="cursor-pointer flex flex-col items-center justify-center gap-2 px-4 py-2  text-black text-sm font-medium rounded-md "
              >
                <LuUploadCloud className="text-2xl" />
                Upload Photo
              </label>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white border rounded-md p-7 flex flex-col mt-5 ">
          <h3 className="font-medium text-xl">Address</h3>

          <form action="" className="flex  flex-col gap-5 mt-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 mt-1">
                <div className="relative ">
                  <label className="text-sm">
                    Province<span className="text-red-500">*</span>
                  </label>
                  <div className="absolute top-10 right-3 z-10  ">
                    <span
                      className="flex flex-col gap-[-3px]"
                      onClick={() => setProvinceIsOpen(!isOpen)}
                    >
                      <RxDoubleArrowDown className="text-xl text-fontColor" />
                    </span>
                  </div>
                </div>
                <div
                  onMouseLeave={() => setProvinceIsOpen(false)}
                  className="relative  "
                >
                  {/* Province Dropdown  Trigger */}
                  <div
                    className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
                    onClick={() => setProvinceIsOpen(!isProvinceOpen)}
                  >
                    {ProvinceOption}
                  </div>
                  {/* Province Dropdown Options */}
                  {isProvinceOpen && (
                    <ul
                      onMouseEnter={() => setProvinceIsOpen(true)}
                      className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                    >
                      {provincesOfNepal.map((i) => (
                        <li
                          key={i}
                          className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                          onClick={() => handleProvinceOptionClick(`${i}`)}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-1">
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
            </div>

            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">Postal code</label>
              <input type="text" className="p-3 text-sm border-2 rounded-md" />
            </div>

            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">
                Current Address<span className="text-red-500">*</span>
              </label>
              <input type="text" className="p-3 text-sm border-2 rounded-md" />
            </div>
          </form>

          <div className="mt-5 self-end">
            <button className="bg-secondary text-white px-4 py-2 font-normal rounded-md">
              Save
            </button>
          </div>
        </div>

        {/* social link */}
        <div className="bg-white border rounded-md p-7 flex flex-col mt-5">
          <form>
            <div className="flex items-center  flex-wrap ms:flex-nowrap gap-1 sm:gap-5">
              <div className="flex flex-col gap-1 mt-1 w-36 ">
                <div className="relative ">
                  <label className="text-sm">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <div className="absolute top-10 right-3 z-10  ">
                    <span onClick={() => setSocialIsOpen(!isSocialOpen)}>
                      <MdKeyboardArrowDown className="text-xl text-fontColor" />
                    </span>
                  </div>
                </div>
                <div
                  onMouseLeave={() => setSocialIsOpen(false)}
                  className="relative  "
                >
                  {/* Province Dropdown  Trigger */}
                  <div
                    className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
                    onClick={() => setSocialIsOpen(!isProvinceOpen)}
                  >
                    {socialOption}
                  </div>
                  {/* Province Dropdown Options */}
                  {isSocialOpen && (
                    <ul
                      onMouseEnter={() => setSocialIsOpen(true)}
                      className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
                    >
                      {socialMediaPlatforms.map((i) => (
                        <li
                          key={i}
                          className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                          onClick={() => handleSocialOptionClick(`${i}`)}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col gap-1 mt-1 flex-1 ">
                <label className="text-sm">
                  Links<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="eg. www.social-site.com"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 text-secondary text-sm mt-10">
              <VscAdd /> Add Social Link
            </div>
          </form>
        </div>
      </div>

 
    </section>
  );
}

export default RecruiterCompanyProfile;
