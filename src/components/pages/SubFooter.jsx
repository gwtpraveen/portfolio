import { Link } from "react-router-dom";
import "../../style/css/page/subFooter.css";

const SubFooter = (props) => {
    const handleToTop = () => {
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}
    return ( 
        <footer className="subFooter">
            <ul className="links">
                <li className="link"><Link to="/" onClick={handleToTop}>HOME</Link></li>
                <li className="link"><Link to="/mywork" onClick={handleToTop}>MY WORK</Link></li>
                <li className="link"><Link to="/contact" onClick={handleToTop}>CONTACT ME</Link></li>
                <li className="link"><Link to="/aboutme" onClick={handleToTop}>ABOUT ME</Link></li>
            </ul>
             <p className="copyright">Design + build by Thamindu Praveen ⓒ2022</p>
        </footer>
     );
}
 
export default SubFooter;