import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navber = () => {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header-area">
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 w-full z-50 bg-black shadow-lg" : "bg-black"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <NavLink to="/" className="text-white text-2xl font-bold">
            Travel
          </NavLink>
          <div className="flex items-center">
            <div className="flex items-center space-x-6">
              <NavLink
                to="/"
                className="text-white hover:text-gray-200 transition duration-200"
              >
                <FaHome className="text-2xl" />
              </NavLink>
             
     
             
             

            
            </div>

            <div className="relative ml-4">
              <img
                onClick={() => setToggle(!toggle)}
                src="https://i.ibb.co/Xsnkx3L/user.png"
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              {toggle && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md py-2 z-50">
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </NavLink>
                 
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
