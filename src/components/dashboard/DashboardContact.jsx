import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function DashboardContact() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  const categoryList = [
    "Account Management",
    "Application Process",
    "Technical Support",
    " profile Assistant",
    "Feedback and Suggestions",
    "Training And Resources",
    "Legal and Privacy Concerns",
    "Networking Opportunities",
    "others",
    "Contact Us",
  ];
  const [selectedOption, setSelectedOption] = useState("Others");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <div className="bg-white rounded-md p-5 ">
      <h2 className="text-xl font-medium">Contact Us</h2>
      <p className="text-xs text-fontColor mt-3">
        We are here to help you. Report a bug or any queries.
      </p>
      <form action="" className="mt-5 flex flex-col">
        <div className="flex flex-col gap-1 ">
          <label className="text-sm">
            Subject<span className="text-red-500">*</span>
          </label>
          <input type="text" className="p-3 text-sm border-2 rounded-md" />
        </div>

        <div className="flex flex-col gap-1 mt-3">
          <div className="relative ">
            <label className="text-sm">
              Categories<span className="text-red-500">*</span>
            </label>
            <div className="absolute top-10 right-3 z-10  ">
              <span onClick={() => setIsOpen(!isOpen)}>
                <MdKeyboardArrowDown className="text-xl text-fontColor" />
              </span>
            </div>
          </div>
          <div onMouseLeave={() => setIsOpen(false)} className="relative  ">
            {/* Selection Dropdown  Trigger */}
            <div
              className="p-3 text-sm border-2 rounded-md bg-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption}
            </div>
            {/* Selection Dropdown Options */}
            {isOpen && (
              <ul
                onMouseEnter={() => setIsOpen(true)}
                className="absolute top-11 w-full h-52 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden"
              >
                {categoryList.map((i) => (
                  <li
                    key={i}
                    className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
                    onClick={() => handleOptionClick(`${i}`)}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3 ">
          <label className="text-sm">
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            type="text"
            className="p-3 text-sm border-2 min-h-20 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-3 mt-3">
          {/* Label */}
          <label className="text-sm ">
            Attachment <span className="text-red-500">*</span>
          </label>

          {/* Custom File Upload */}
          <div className="relative">
            {/* Styled Input */}
            <input
              type="file"
              id="customFileUpload"
              onChange={handleFileChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            {/* Custom Styled Button */}
            <div className="flex items-center gap-3  border border-gray-300 rounded-md w-full">
              <div className="px-5 py-2 text-sm  bg-fontColor bg-opacity-30 h-full ">
                Choose file
              </div>
              <span className="text-sm text-fontColor">
                {fileName || "No file selected"}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-fontColor mt-5">
          We will get back to you within 24 hours. Thank you for your patience.
        </p>

        <div className="mt-5 self-end">
          <button className="px-4 py-2 rounded-md bg-secondary text-white font-medium text-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DashboardContact;
