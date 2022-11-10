import "./Layout.css";
import { Outlet } from "react-router-dom";
import PokeNavbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <PokeNavbar></PokeNavbar>
      <Outlet />
    </>
  );
};

export default Layout;
