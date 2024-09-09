import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_server}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut, auth, setUser, setLoading } = useContext(AuthContext);
  //!
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("Tracked in the Axios Interceptor - ", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Problem with Token - ", error.response.status);
          logOut(auth)
            .then(() => {
              setUser(null);
              setLoading(true);
              // navigate("/");
            })
            .catch();
        }
      }
    );
  }, [auth, logOut, setLoading, setUser]);
  //!
  return axiosInstance;
};

export default useAxiosSecure;
