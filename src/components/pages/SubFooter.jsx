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
                <li className="link"><a href="/" onClick={handleToTop}>HOME</a></li>
                <li className="link"><a href="/mywork" onClick={handleToTop}>MY WORK</a></li>
                <li className="link"><a href="/aboutme" onClick={handleToTop}>ABOUT ME</a></li>
            </ul>
             <p className="copyright">Design + build by Thamindu Praveen ⓒ 2022</p>
        </footer>
     );
}
 
export default SubFooter;