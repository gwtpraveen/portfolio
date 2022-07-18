import "../../../App.css";
import HeroSection from "./HeroSection";
import MyWorkSection from "./MyWorkSection";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "../Footer";

const HomePage = (props) => {
    return ( 
        <div className="container">
            <HeroSection/>
            <MyWorkSection/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>
        </div>
     );
}
 
export default HomePage;