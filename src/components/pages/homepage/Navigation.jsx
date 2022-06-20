import "../../../style/css/page/homepage/navigation.css";

const Navigation = (props) => {
    return ( 
        <nav className="nav">
            <img src="" alt="logo" />
            <ul className="links">
                <li className="link">
                    <a href="/">MY WORK</a>
                </li>
                <li className="link">
                    <a href="/">ABOUT ME</a>
                </li>
                <li className="link">
                    <a href="/">CONTACT</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;