import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Internships from "./pages/internships/Internships";
import Jobs from "./pages/Jobs";
import BrowseEvents from "./pages/BrowseEvents";
import Login from "./pages/auth/Login";
import CandidateRegister from "./pages/auth/CandidateRegister";
import RecruiterRegister from "./pages/auth/RecruiterRegister";
import InstituteRegister from "./pages/auth/InstituteRegister";
import InternshipDetails from "./pages/internships/InternshipDetails";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import SearchOpportunities from "./pages/dashboard/SearchOpportunities";
import MyProfile from "./pages/dashboard/MyProfile";
import JobApplication from "./pages/dashboard/JobApplication";
import EventApplication from "./pages/dashboard/EventApplication";
import Bookmarks from "./pages/dashboard/Bookmarks";
import DashboardRequest from "./pages/dashboard/DashboardRequest";
import DashboardHistory from "./pages/dashboard/DashboardHistory";
import DashboardSetting from "./pages/dashboard/DashboardSetting";
import DashboardContact from "./pages/dashboard/DashboardContact";
import { useState } from "react";
import RecruiterDashboard from "./pages/recruiterDashboard/RecruiterDashboard";
import RecruiterHome from "./pages/recruiterDashboard/RecruiterHome";
import RecruiterCompanyProfile from "./pages/recruiterDashboard/RecruiterCompanyProfile";
import RecruiterAllInternship from "./pages/recruiterDashboard/RecruiterAllInternship";
import RecruiterHistory from "./pages/recruiterDashboard/RecruiterHistory";
import RecruiterContact from "./pages/recruiterDashboard/RecruiterContact";
import RecruiterSetting from "./pages/recruiterDashboard/RecruiterSetting";
import RecruiterPostJob from "./pages/recruiterDashboard/RecruiterPostJob";
import RecruiterAllApplicants from "./pages/recruiterDashboard/RecruiterAllApplicants";
import RecruiterShortlisted from "./pages/recruiterDashboard/RecruiterShortlisted";
import RecruiterSave from "./pages/recruiterDashboard/RecruiterSave";
import RecruiterCredit from "./pages/recruiterDashboard/RecruiterCredit";
import RecruiterCreditUsage from "./pages/recruiterDashboard/RecruiterCreditUsage";

function App() {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (title) => {
    setActiveButton(title);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            activeButton={activeButton}
            handleButtonClick={handleButtonClick}
          />
        }
      >
        <Route index element={<Home />} />

        <Route path="/internships">
          <Route index element={<Internships />} />
          <Route path="/internships/details" element={<InternshipDetails />} />
        </Route>

        {/* <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="candidate" element={<Dashboard />} />
        
        </Route> */}

        {/* <Route path="/auth">
          <Route path="/login" element={<Login />} />
          <Route  path="/register-candidate" element={<CandidateRegister />} />
          <Route  path="/register-recruiter" element={<RecruiterRegister />} />
          <Route  path="/register-institute" element={<InstituteRegister />} />
        </Route> */}

        {/* DashBoard candidate */}
        <Route
          path="/dashboard/candidate"
          element={
            <Dashboard
              activeButton={activeButton}
              handleButtonClick={handleButtonClick}
            />
          }
        >
          <Route index element={<DashboardHome />} />
          <Route
            path="search-opportunities"
            element={<SearchOpportunities />}
          />
          <Route path="profile" element={<MyProfile />} />
          <Route path="job-application" element={<JobApplication />} />
          <Route path="event-application" element={<EventApplication />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="request" element={<DashboardRequest />} />
          <Route path="contact" element={<DashboardContact />} />
          <Route path="history" element={<DashboardHistory />} />
          <Route path="setting" element={<DashboardSetting />} />
        </Route>

        <Route path="/dashboard/company" element={<RecruiterDashboard activeButton={activeButton}
                handleButtonClick={handleButtonClick} />}>
          <Route index element={<RecruiterHome />} />
          <Route path="profile" element={<RecruiterCompanyProfile />} />

          <Route path="internship-job" element={<RecruiterAllInternship />} />
          <Route path="internship-job/post" element={<RecruiterPostJob />} />

          <Route path="applicants" element={<RecruiterAllApplicants />} />
          <Route
            path="applicants/shortlisted"
            element={<RecruiterShortlisted />}
          />
          <Route path="applicants/saved" element={<RecruiterSave />} />

          <Route path="membership" element={<RecruiterCredit />} />
          <Route
            path="membership/credit-usage"
            element={<RecruiterCreditUsage />}
          />

          <Route path="contact" element={<RecruiterContact />} />
          <Route path="history" element={<RecruiterHistory />} />

          <Route path="setting" element={<RecruiterSetting />} />
        </Route>

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse-events" element={<BrowseEvents />} />

        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/register-candidate"
          element={<CandidateRegister />}
        />
        <Route
          path="/auth/register-recruiter"
          element={<RecruiterRegister />}
        />
        <Route
          path="/auth/register-institute"
          element={<InstituteRegister />}
        />

        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
