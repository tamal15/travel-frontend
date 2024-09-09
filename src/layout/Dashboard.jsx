import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import DashboardSideBar from "../pages/DashboardSideBar/DashboardSideBar";

const Dashboard = () => {
  useTitle("Home");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  const toggleDropdown = () => {
    setIsOpens(!isOpens);
  };
  return (
    <div className="flex flex-row-reverse gap-4 relative">
      <div
        className={`${
        
          isOpenSidebar ? "w-[20%]" : "w-[20%]"
        } h-screen fixed top-0 left-0 bg-white z-50 overflow-y-scroll`}
      >
        <div className="w-[100px] md:w-full">
          <div className="hidden md:flex items-center gap-5">
            <img className="w-32 h-16 ms-3 mt-2" src="https://media.licdn.com/dms/image/v2/D560BAQGJ_gtEj9Hwjg/company-logo_200_200/company-logo_200_200/0/1713423450176/travel_business_portal_logo?e=1733961600&v=beta&t=TkUQHC9IRvXrUp8RDL2_5HyPTvS0pxCnWsiChdjifdw" />
            <FaTimes
              onClick={() => setIsOpenSidebar(false)}
              className="block md:hidden text-2xl text-[black] mx-4 font-semibold"
            />
          </div>
          <DashboardSideBar setIsOpenSidebar={setIsOpenSidebar} />
        </div>
      </div>
      {/* Side Bar End  */}
      {/* Main Content Start */}
      {/* isOpenSidebar ? "w-full md:w-[20%]" : "w-0 md:w-[20%]" */}
      {/* <div className="w-full ml-[20%]"> */}
      <div className="w-[80%]">
        <div className="">
          <div className=" flex justify-between shadow-2xl px-10 ">
            <div className="flex justify-center items-center text-center ms-5 ">
              <h2 className="text-black font-bold text-3xl">Dashboard</h2>
              <FaBars
                onClick={() => setIsOpenSidebar(true)}
                className="block md:hidden text-2xl text-[black] mx-4 font-semibold"
              />
            </div>
            <div className="hidden md:flex justify-center items-center p-5 ms-24">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-16 pr-10  py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />

                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center">
              
              </div>
              <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="relative">
                  {/* Profile Image */}
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_640.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full cursor-pointer text-3xl"
                    onClick={toggleDropdown}
                  />
                  {/* Dropdown Menu */}
                  {isOpens && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                      <ul className="py-1">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-xl font-semibold">
                          Profile Settings
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-xl font-semibold">
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
