import { useLoaderData } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Services from "../components/Services";
import Sponsors from "../components/Sponsors";

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Services data={data}></Services>
            <AboutUs></AboutUs>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;