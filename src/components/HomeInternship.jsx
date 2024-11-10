import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function HomeInternship() {
  return (
    <section className=" px-5 2xl:px-[142px] py-10 bg-secondaryBg ">
      <div className="flex items-start justify-between mb-12 flex-wrap">
        <div className="flex flex-col gap-2 ">
          <h3 className="text-3xl font-semibold ">
            Get your dream internship now
          </h3>

          <p className="">
            Search your career opportunity through the available position
          </p>
        </div>
        <Link className="text-secondary font-semibold text-xs flex justify-center items-center mt-2 md:mt-0 hover:underline ">
          Browse all internship <IoIosArrowForward className="font-semibold" />{" "}
        </Link>
      </div>
      <div>
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap md:overflow-x-hidden snap-x pb-5">
          <HomeInternshipBtnActive />
          <HomeInternshipBtn title="Nearest" />
          <HomeInternshipBtn title="Newest" />
          <HomeInternshipBtn title="Oldest" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 pt-16">
          <HomeInternshipCart />
          <HomeInternshipCart />
          <HomeInternshipCart />
        </div>
      </div>
    </section>
  );
}

export default HomeInternship;

export function HomeInternshipCart() {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col items-start justify-center gap-3">
      <div className="size-16 bg-black rounded-full">
        <img src="" alt="" />
      </div>
      <h4 className="text-xl font-medium ">Mern stack developers</h4>
      <p className="text-sm uppercase text-secondary">Intetnship</p>
      <p className="text-sm">
        <span className=" font-medium">Lorem ipsum</span> dolor sit amet
        consectetur adipisicing elit. Dolore, suscipit?
      </p>
      <div className="flex gap-3 my-2">
        <HomeInternshipBtn />
        <HomeInternshipBtn />
        <HomeInternshipBtn />
      </div>
      <Link className="text-secondary font-semibold text-l flex justify-center items-center pl-1 ">
        Apply Now <IoIosArrowRoundForward />{" "}
      </Link>
    </div>
  );
}

export function HomeInternshipBtnActive() {
  return (
    <button className="bg-secondary text-white px-4 py-2 rounded-xl text-xs ">
      featured HomeInternship
    </button>
  );
}
export function HomeInternshipBtn({ title = "Default", href }) {
  return (
    <NavLink
      to={href}
      className=" text-black px-4 py-2 rounded-md border  text-xs bg-slate-100"
    >
      {title}
    </NavLink>
  );
}
