import "../../style/css/page/footer.css";

const Footer = (props) => {
    const handleToTop = () => {
            window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    return ( 
        <footer className="footer">
            <div className="container">
                <p className="copyright">Design + build by Thamindu Praveen ⓒ2022</p>
                <button className="toTop" onClick={handleToTop}>
                    <i className="fa-solid fa-angle-up"></i>
                </button>
            </div>
        </footer>
     );
}
 
export default Footer;

