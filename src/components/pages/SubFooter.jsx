import { Link } from "react-router-dom";
import "../../style/css/page/subFooter.css";

const SubFooter = (props) => {
    return ( 
        <footer className="subFooter">
            <ul className="links">
                <li className="link"><Link to="/">HOME</Link></li>
                <li className="link"><Link to="/mywork">MY WORK</Link></li>
                <li className="link"><Link to="/contact">CONTACT ME</Link></li>
                <li className="link"><Link to="/aboutme">ABOUT ME</Link></li>
            </ul>
             <p className="copyright">Design + build by Thamindu Praveen ⓒ2022</p>
        </footer>
     );
}
 
export default SubFooter;