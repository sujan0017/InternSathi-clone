import UserChoose from "../components/UserChoose";
import Hero from "../components/Hero";
import Help from "../components/Help";
import Blog from "../components/Blog";
import AskQuestion from "../components/AskQuestion";
import HomeContact from "../components/HomeContact";
import DownloadApp from "../components/DownloadApp";
import HomeInternship from "../components/HomeInternship";

function Home() {
  return (
    <section className=" w-full pt-[64px]">
      <Hero />
      <UserChoose />
      <HomeInternship />
      <Help />
      <HomeInternship />
      <Blog />
      <AskQuestion />
      <HomeContact />
      <DownloadApp />
    </section>
  );
}

export default Home;
