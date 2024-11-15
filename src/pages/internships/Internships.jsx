import JobsSection from "../../components/JobsAndIntern/JobsSection";
import JobsSort from "../../components/JobsAndIntern/JobsSort";

function Internships() {
  return (
    <section className="2xl:px-[142px]">
      <div className="pt-[83px]  pb-[24px] ">
        <JobsSort />
      </div>
      <div className="px-5">
        <JobsSection />
      </div>
    </section>
  );
}

export default Internships;
