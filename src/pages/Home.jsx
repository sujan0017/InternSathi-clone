import UserChoose from "../components/UserChoose";
import Hero from "../components/Hero";
import Internship from "../components/Internship";

function Home() {
  return (
    <section className=" w-full pt-[64px]">
      <Hero />
      <UserChoose />
      <Internship />
      
    </section>
  );
}

export default Home;
