import {  IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className=" w-full px-5 2xl:px-[142px] py-[56px] flex flex-col items-center gap-3 bg-primary ">
      <h5 className="text-[30px] font-semibold text-white">Form Our Blogs</h5>
      <p className="text-t-md text-white">
        A better career is out there. We'll help your first step to becoming
        everything you want to be.
      </p>
      <div className="flex gap-5 flex-wrap md:flex-nowrap mt-5 ">
        <BlogCart
          img={
            "https://internsathi.com/_next/image?url=%2Fblog3.png&w=640&q=75"
          }
          title={
            "Unlocking Success: 10 Best Reasons to Hire an Intern for Your Company"
          }
          intro={"Kunal Sah - 19 Jan 2022"}
        />
        <BlogCart
          img={"https://internsathi.com/_next/image?url=%2Fblog2.png&w=640&q=75"}
          title={"Internship: Ultimate Guide 2023"}
          intro={
            "Niraj Kafle - 19 Jan 2022"
          }
        />
        <BlogCart
          img={"https://internsathi.com/_next/image?url=%2Fblog1.png&w=640&q=75"}
          title={"Best Guide: How to Apply for Internship from InternSathi."}
          description={"KunaL Sah - 19 Jan 2022"}
        />
      </div>
    </section>
  );
}

export default Blog;

// eslint-disable-next-line react/prop-types
export function BlogCart({ img, title, intro }) {
  return (
    <div className="   flex flex-col items-first gap-5">
      <div className="w-[] h-[] rounded-md">
        <img src={img} alt="" className="w-full rounded-md" />
      </div>
      <div className="flex flex-col gap-3 item-center  ">
        <p className=" text-gray-400 ">{intro}</p>
        <h3 className="text-[22px] font-normal text-white  hover:underline">
          {title}
        </h3>
      </div>
      <Link className="text-secondary flex items-center justify-start gap-1 mt-3">
        Read Post
        <IoIosArrowRoundForward className="text-2xl" />
      </Link>
    </div>
  );
}
