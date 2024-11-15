import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
  const location = useLocation();

  const dashboard = [`/dashboard`];

  const shouldHideHeaderFooter = dashboard.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default MainLayout;
