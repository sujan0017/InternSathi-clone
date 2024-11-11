/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function AskQuestion({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  firstDescription,
  secondDescription,
  thirdDescription,
  fourthDescription,
  backgroundColor = 'white'
}) {
  return (
    <section
      id="faq"
      className={`bg-${backgroundColor} w-full px-5 2xl:px-[142px] py-[56px] flex flex-col items-center gap-3 `}
    >
      <h5 className="text-[30px] font-semibold ">Frequently Asked Questions</h5>
      <p className=" text-fontColor text-sm">
        Still you have any questions? Contact our Team via{" "}
        <span className="text-secondary">support@internsathi.com</span>
      </p>

      <div className=" flex flex-col-reverse gap-10 flex-wrap md:flex-row md:flex-nowrap mt-10">
        <div className=" w-full md:w-1/2 xl:w-1/3">
          <h5 className="font-bold text-xl mb-2">Ask Your Questions</h5>
          <p className="mb-4 text-fontColor text-sm">
            If the question is not available on our FAQ section, Feel free to
            contact us personally, we will resolve your respective doubts.
          </p>
          <button className="flex justify-center items-center gap-2 border-2 py-2 px-3 rounded-xl text-secondary text-[15px] font-semibold hover:bg-secondary hover:bg-opacity-10 hover:border-2 hover:border-secondary">
            <BsChatDots className="text-xl" /> Contact Us
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 ">
          <AskQuestionCart title={firstTitle} description={firstDescription} />
          <AskQuestionCart
            title={secondTitle}
            description={secondDescription}
          />
          <AskQuestionCart title={thirdTitle} description={thirdDescription} />
          <AskQuestionCart
            title={fourthTitle}
            description={fourthDescription}
          />
        </div>
      </div>
    </section>
  );
}

export default AskQuestion;

export function AskQuestionCart({ title, description }) {
  const [showPara, setShowPara] = useState(false);

  return (
    <div
      className="p-[16px] border rounded-md"
      onClick={() => setShowPara(!showPara)}
    >
      <h3 className="text-[17px] font-semibold py-[10px] flex justify-between items-center hover:underline text-black text-opacity-70">
        {title}
        {showPara ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </h3>
      <p
        className={`${
          showPara ? "block" : "hidden"
        } pt-2 text-[15px] text-fontColor`}
      >
        {description}
      </p>
    </div>
  );
}
