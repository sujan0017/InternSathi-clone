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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/internships">
          <Route index element={<Internships />} />
          <Route path="/internships/details" element={<InternshipDetails />} />
        </Route>

        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        
        </Route>

        {/* <Route path="/auth">
          <Route path="/login" element={<Login />} />
          <Route  path="/register-candidate" element={<CandidateRegister />} />
          <Route  path="/register-recruiter" element={<RecruiterRegister />} />
          <Route  path="/register-institute" element={<InstituteRegister />} />
        </Route> */}

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
