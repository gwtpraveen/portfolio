import BounceLetter from "../../common/BounceLetter";
import "../../../style/css/page/aboutmePage.css";
import SubFooter from "../SubFooter";

const AboutmePage = (props) => {
    return ( 
        <>
            <section className="aboutmePage">
                <div className="details">
                    <h2 className="h2"><BounceLetter>About</BounceLetter> <BounceLetter>Me</BounceLetter></h2>
                    <div className="details-row">
                    <div>
                        <p className="discription-1 discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequatur deleniti aliquam mollitia ipsum dolorum quas earum fuga libero magni!</p>
                        <p className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni illo, et exercitationem ipsam recusandae aliquid cum voluptate placeat ducimus.</p>
                    </div>
                    <div className="whatiuse">
                        <h3>Here are a few tools & technologies I've  been working with</h3>
                        <div>
                        <ul>
                            <li>{"<"} HTML5</li>
                            <li>{"<"} javaScript</li>
                            <li>{"<"} React.js</li>
                            <li>{"<"} git</li>
                            <li>{"<"} Sass/Scss</li>
                            <li>{"<"} Tailwind</li>
                        </ul>
                        <ul>
                            <li>{"<"} CSS3</li>
                            <li>{"<"} BootStrap</li>
                            <li>{"<"} RESTful API</li>
                            <li>{"<"} gitHub</li>
                            <li>{"<"} Python</li>
                            <li>{"<"} Figma</li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="education">
                        <h3 className="h3">Education</h3>
                        <div className="row">
                            <img src="https://via.placeholder.com/300x200" alt="" className="img"/>
                            <div className="details">
                                <p className="title">title</p>
                                <p className="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus.</p>
                                <p className="provider">owner</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src="https://via.placeholder.com/300x200" alt="" className="img"/>
                            <div className="details">
                                <p className="title">title</p>
                                <p className="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus.</p>
                                <p className="provider">owner</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src="https://via.placeholder.com/300x200" alt="" className="img"/>
                            <div className="details">
                                <p className="title">title</p>
                                <p className="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus.</p>
                                <p className="provider">owner</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="h3">Getting touch with me</h3>
                    <div className="social-links">
                        <a href="" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="" className="social-link"><i className="fa-brands fa-github"></i></a>
                        <a href="" className="social-link"><i className="fa-brands fa-codepen"></i></a>
                        <a href="" className="social-link"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.facebook.com/people/Thamindu-Praveen/100082742764466/" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <SubFooter/>
        </>
     );
}
 
export default AboutmePage;
