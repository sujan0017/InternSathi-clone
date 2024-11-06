function Help() {
  return (
    <section className=" w-full  px-5 2xl:px-[142px] py-[56px] flex flex-col items-center gap-3 ">
      <h5 className="text-[30px] ">How can we help</h5>
      <p className="text-t-md text-gray-400">Making your talent search easy</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <HelpCart
          img={"https://internsathi.com/posting.svg"}
          title={"Free Internship Posting"}
          description={
            "Post an Internship of your open vacancies absolutely for free."
          }
        />
        <HelpCart
          img={"https://internsathi.com/all-types-internship.svg"}
          title={"All Types of Internship"}
          description={
            "Hire from internship on multiple sectors for absolutely free."
          }
        />
        <HelpCart
          img={"https://internsathi.com/hire-the-best.svg"}
          title={"Hire the best"}
          description={
            "Get the best candidate for your vacancy fulfillment."
          }
        />
      
      </div>
    </section>
  );
}

export default Help;

// eslint-disable-next-line react/prop-types
export function HelpCart({ img, title, description }) {
  return (
    <div className="w-[382] h-[291px] border p-[32px] flex flex-col justify-center items-center gap-3">
      <div className="size-[135px]">
        <img src={img} alt="" className="size-[150px]" />
      </div>
      <div className="flex flex-col gap-3 item-center  ">
        <h3 className="text-[22px] font-normal text-center">{title}</h3>
        <p className=" text-gray-400 text-center">{description}</p>
      </div>
    </div>
  );
}
