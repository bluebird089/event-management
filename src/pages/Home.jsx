import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Services from "../components/Services";
import Sponsors from "../components/Sponsors";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;