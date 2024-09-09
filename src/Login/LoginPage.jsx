import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LoginPage = () => {
  const { authReloader, setAuthReloader, logIn,logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await logIn(email, password);
      navigate("/");
      toast.success("Login Successful");
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.code);
      if (error.code === "auth/invalid-credential")
        toast.error("Invalid username or password!");
    }
    setAuthReloader(!authReloader);
    setLoader(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 font-semibold rounded focus:outline-none focus:border-orange-500"
              placeholder="Enter your E-mail"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 font-semibold rounded focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 focus:outline-none flex items-center justify-center"
          >
            {loader ? (
              <FaSpinner className="animate-spin text-white" />
            ) : (
              "Login"
            )}
          </button>
        </form>
          {/* logout start */}
          <NavLink
            onClick={async () => {
              await logOut();
              setAuthReloader(!authReloader);
              toast.success("Logout successful");
            }}
          >
            <div className="  shadow  flex items-center justify-center gap-2 font-bold p-3 mt-4 duration-300 active:scale-75 pr-0">
              {/* <FaHome className="text-xl text-[black] -ms-24" /> */}
              <h2 className="font-semibold">LogOut</h2>
            </div>
          </NavLink>

          {/* logout end */}
      </div>
    </div>
  );
};

export default LoginPage;
