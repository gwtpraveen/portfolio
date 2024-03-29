import "../../style/css/page/homepage/navigation.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    const navEl = useRef();
    const handleNav = () => {
        navEl.current.classList.toggle("active");
    };

    const handleToTop = () => {
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}

    return ( 
        <nav className="nav" ref={navEl}>
            <img src="" alt="logo" className="logo"/>
            <div className="hamburger-icon" onClick={handleNav}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="links">
                <li className="link">
                    <Link to="/mywork" onClick={handleToTop}>MY WORK</Link>
                </li>
                <li className="link">
                    <Link to="aboutme">ABOUT ME</Link>
                </li>
                <li className="link">
                    {/* <Link to="#mywork">CONTACT</Link> */}
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;
