import UserChoose from "../components/UserChoose";
import Hero from "../components/Hero";
import Internship from "../components/Internship";
import Help from "../components/Help";
import Blog from "../components/Blog";
import AskQuestion from "../components/AskQuestion";
import HomeContact from "../components/HomeContact";
import DownloadApp from "../components/DownloadApp";

function Home() {
  return (
    <section className=" w-full pt-[64px]">
      <Hero />
      <UserChoose />
      <Internship />
      <Help />
      <Internship />
      <Blog />
      <AskQuestion />
      <HomeContact />
      <DownloadApp />
    </section>
  );
}

export default Home;
