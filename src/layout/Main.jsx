import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";
// import Navbar from "../shared/navbar/Navbar";
// import Footer from "../shared/footer/Footer";

const Main = () => {
  return (
    <>
    
    <main className="min-h-[100vh] flex flex-col dark:bg-[#18191a] dark:text-white">
        <Navber />
        <Outlet />
        {/* <Footer /> */}
      </main>
   
     
    </>
  );
};

export default Main;
