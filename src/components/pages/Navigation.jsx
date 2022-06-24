import "../../style/css/page/homepage/navigation.css";
import { useRef } from "react";

const Navigation = (props) => {
    const hamburgetEl = useRef();
    const handleNav = () => {
        hamburgetEl.current.classList.toggle("active");
    };

    return ( 
        <nav className="nav">
            <img src="" alt="logo" className="logo"/>
            <div className="hamburger-icon" ref={hamburgetEl} onClick={handleNav}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="links">
                <li className="link">
                    <a href="#mywork">MY WORK</a>
                </li>
                <li className="link">
                    <a href="#about">ABOUT ME</a>
                </li>
                <li className="link">
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;