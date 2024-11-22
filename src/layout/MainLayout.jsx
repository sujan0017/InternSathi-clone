import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({handleButtonClick}) {
  const location = useLocation();

  // List of routes where the header and footer should be hidden
  const dashboardRoutes = ["/dashboard/candidate"];

  // Check if the current route is in the list of dashboard routes
  const shouldHideHeaderFooter = dashboardRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideHeaderFooter && <Header handleButtonClick={handleButtonClick}/>}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default MainLayout;
