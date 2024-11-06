import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Jobs from "./pages/Jobs";
import BrowseEvents from "./pages/BrowseEvents";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse-events" element={<BrowseEvents />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register-candidate" element={<Register />} />
       
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
