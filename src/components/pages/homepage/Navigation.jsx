import "../../../style/css/page/homepage/navigation.css";

const Navigation = (props) => {
    return ( 
        <nav className="nav">
            <img src="" alt="logo" />
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