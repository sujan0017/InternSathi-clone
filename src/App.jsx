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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Jobs />} />
        
    




      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
