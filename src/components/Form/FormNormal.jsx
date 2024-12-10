/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { RxDoubleArrowDown } from "react-icons/rx";

function FormNormal({ placeholder, title, type, required }) {
  return (
    <div className="flex flex-col gap-2 mt-5 ">
      <label className="text-sm">
        {title}
        <span className="text-red-500 text-sm">{required}</span>
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="p-3 text-sm border-2 rounded-md"
      />
    </div>
  );
}

export default FormNormal;

export function FormLevelOne({
  title,
  placeHolder,
  toggleSwitch,
  value,
  isMenuOpen,
  handleClickEvent,
  mappingValue,
  required,
}) {
  return (
    <div className="flex flex-col gap-2 mt-5 relative ">
      <div className="relative">
        <label className="text-sm">
          {title}
          <span className="text-red-500">{required}</span>
        </label>
        <div className="flex items-center justify-center absolute  top-12 right-2">
          <span onClick={toggleSwitch} className="flex flex-col gap-[-3px] ">
            <RxDoubleArrowDown className="text-xl text-fontColor hover:cursor-pointer hover:text-secondary  font-medium " />
          </span>
        </div>
      </div>

      <div className="w-full">
        <input
          placeholder={placeHolder}
          type="text"
          value={value}
          className="p-3 text-sm border-2 rounded-md w-full"
        />

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[75px] w-full  max-h-56 mt-1 bg-white border-2 rounded-md shadow-lg z-20 overflow-x-hidden`}
        >
          {mappingValue.map((i) => (
            <li
              key={i}
              className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
              onClick={() => handleClickEvent(i)}
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function FormLevelOneButton({
  title,
  placeHolder,
  toggleSwitch,
  value,
  isMenuOpen,
  handleClickEvent,
  mappingValue,
  required,
}) {
  return (
    <div className="flex flex-col gap-2 mt-5 relative ">
      <div className="relative">
        <label className="text-sm">
          {title}
          <span className="text-red-500">{required}</span>
        </label>
        <div className="flex items-center justify-center absolute  top-9 right-1 hover:cursor-pointer">
          <span
            onClick={toggleSwitch}
            className="bg-slate-200 rounded-md py-2 px-4 flex items-center justify-center gap-3 text-sm font-medium "
          >
            {value} <IoIosArrowDown className="hover:cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="w-full">
        <span className="absolute top-11 left-2">Rs.</span>
        <input
          placeholder={placeHolder}
          type="number"
         
          className="p-3 pl-8 text-sm border-2 rounded-md w-full"
        />

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[75px] right-0  max-h-56 mt-1 bg-white border-2 rounded-md shadow-lg z-20 overflow-x-hidden`}
        >
          {mappingValue.map((i) => (
            <li
              key={i}
              className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
              onClick={() => handleClickEvent(i)}
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FormLevelTwo({
  title,
  toggleSwitch,
  mappingValue,
  handleClickEvent,
  value,
  isMenuOpen,
  required,
}) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="relative bg-red  ">
        <label className="text-sm">
          {title}
          <span className="text-red-500">{required}</span>
        </label>
        <div className="absolute top-12 right-3 z-10  ">
          <span className="flex flex-col gap-[-3px]" onClick={toggleSwitch}>
            <IoIosArrowDown className="text-xl text-fontColor hover:cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="relative   ">
        <input
          className="text-sm border-2 rounded-md bg-white cursor-pointer p-3 w-full"
          value={value}
          onClick={toggleSwitch}
        />

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-11 w-full min-h-32 mt-1 bg-white border-2 rounded-md shadow-lg z-10 overflow-x-hidden`}
        >
          {mappingValue.map((i) => (
            <li
              key={i}
              className="p-2  hover:bg-secondary hover:bg-opacity-30 hover:text-secondary cursor-pointer"
              onClick={() => handleClickEvent(i)}
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
