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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/details" element={<InternshipDetails />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse-events" element={<BrowseEvents />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register-candidate" element={<CandidateRegister />} />
        <Route path="/auth/register-recruiter" element={<RecruiterRegister />} />
        <Route path="/auth/register-institute" element={<InstituteRegister />} />


        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />



      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
