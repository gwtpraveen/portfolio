import "../../style/css/page/footer.css";

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <div className="container">
                <ul className="links">
                    <li className="link"><a href="">HOME</a></li>
                    <li className="link"><a href="">MY WORK</a></li>
                    <li className="link"><a href="">ABOUT ME</a></li>
                    <li className="link"><a href="">CONTACT</a></li>
                </ul>
                <p className="copyright">Design + build by Thamindu Praveen ⓒ2022</p>
            </div>
        </footer>
     );
}
 
export default Footer;