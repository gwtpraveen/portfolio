import "../../style/css/page/footer.css";

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <div className="container">
                <p className="copyright">Design + build by Thamindu Praveen ⓒ2022</p>
                <button className="toTop">
                    <i className="fa-solid fa-angle-up"></i>
                </button>
            </div>
        </footer>
     );
}
 
export default Footer;

