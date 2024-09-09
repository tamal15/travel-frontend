import useTitle from "../../hooks/useTitle";
import GetCard from "../GetCard/GetCard";

const Home = () => {
    useTitle("Home");

    return (
        <div>
            
           <GetCard/>
        </div>
    );
};

export default Home;