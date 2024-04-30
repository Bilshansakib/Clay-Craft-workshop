import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
