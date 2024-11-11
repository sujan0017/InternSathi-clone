import UserChoose from "../components/home/UserChoose";
import Hero from "../components/home/Hero";
import Help from "../components/home/Help";
import Blog from "../components/home/Blog";
import AskQuestion from "../components/home/AskQuestion";
import HomeContact from "../components/home/HomeContact";
import DownloadApp from "../components/home/DownloadApp";
import HomeInternship from "../components/home/HomeInternship";

function Home() {
  return (
    <section className=" w-full pt-[64px]">
      <Hero />
      <UserChoose />
      <HomeInternship />
      <Help />
      <HomeInternship />
      <Blog />
      <AskQuestion
      backgroundColor="secondaryBg"
        firstTitle="What features does InternSathi offer?"
        firstDescription={`InternSathi offers various features from candidate listing, company
        listing, Applicant Tracking System, Interview Scheduling, candidate
        export, application deadline, apply with LinkedIn, email alert,
        Internship Alert, Profile Builder, Resume Builder, Resume Manager,
        Social App Login and many more.`}
        secondTitle={`How will the department contact me?`}
        secondDescription={`The department will primarily communicate with you through the email address and the phone you provided during the application process. Please ensure that your email is regularly monitored and the phone number is correct.`}
        thirdTitle={`How do I apply for a Internship opening?`}
        thirdDescription={`To apply for an internship opening, first, create an account on internsathi.com. Browse through available internships, select one aligning with your interests, and follow the specified application instructions to submit your application. Good luck!`}
        fourthTitle={`How do I know if I am shortlisted?`}
        fourthDescription={`How do I know if I am shortlisted?
After submitting your application, we will notify shortlisted candidates via email or in-app notification. Please regularly check your inbox, including spam folders in email, for updates on your application status.`}
      />
      <HomeContact />
      <DownloadApp />
    </section>
  );
}

export default Home;
