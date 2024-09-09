import { useContext } from "react";
import toast from "react-hot-toast";
import {
 
  FaHome,
  FaSignOutAlt,
  FaStreetView,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const DashboardSideBar = ({ setIsOpenSidebar }) => {

 

  const { logOut, authReloader, setAuthReloader } = useContext(AuthContext);
  
 

  
  return (
    <>
      <div className="w-full overflow-hidden">
        <section className="flex flex-col gap-2">
          <NavLink onClick={() => setIsOpenSidebar(false)} to={"/dashboard"}>
            <div className="  shadow  flex items-center justify-center gap-2 font-bold p-3 mt-4 duration-300 active:scale-75 pr-0">
              <FaHome className="text-xl text-[black]" />
              <h2 className="font-semibold hidden md:block">
              Travel Business Portal
              </h2>
            </div>
          </NavLink>

          {/* pages start features  */}

          <div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className=" ">
               
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaStreetView className="text-xl text-[black] font-semibold" />
                        <h2 className="font-semibold hidden md:block">
                          Home
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/addproduct"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaStreetView className="text-xl text-[black] font-semibold" />
                        <h2 className="font-semibold hidden md:block">
                          Add Post
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/showproduct"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaStreetView className="text-xl text-[black] font-semibold" />
                        <h2 className="font-semibold hidden md:block">
                          update Post
                        </h2>
                      </div>
                    </NavLink>
                   
                 
                 
                    
                  
                   
                  </div>
                </div>
              </div>
            </div>

          

           
           

           

          
          </div>

       

        

          {/* logout start */}
          <NavLink
            onClick={async () => {
              await logOut();
              setAuthReloader(!authReloader);
              toast.success("Logout successful");
            }}
          >
            <div className="shadow flex items-center justify-center gap-2 font-bold p-3 mt-4 duration-300 active:scale-75 pr-0">
              <FaSignOutAlt className="text-xl text-[black]" />
              <h2 className="font-semibold hidden md:block">LogOut</h2>
            </div>
          </NavLink>

          {/* logout end */}
        </section>
      </div>

      <div className="w-full h-[2px] bg-white mt-5"></div>
    </>
  );
};

export default DashboardSideBar;
