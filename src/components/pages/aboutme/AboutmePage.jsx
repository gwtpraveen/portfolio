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
                        <p className="discription-1 discription">I'm Thamindu Praveen, a front-end developer located in Sri Lanka.<br/><br/>My interest in learning web development began after I completed my Advanced Level in Mathematics. I immediately fell in love with it, so I decided to make this my career.</p>
                        <p className="discription">Since then, I've been working on a fair amount of enjoyable projects to show off my proficiency with various technologies. </p>
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
                        <h3 className="h3">Licenses & certifications</h3>
                        <div className="row">
                            <img src="https://via.placeholder.com/300x200" alt="" className="img"/>
                            <div className="details">
                                <p className="title">CS50: Introduction to Computer Science</p>
                                <p className="discription">An introduction to the intellectual enterprises of computer science and the art of programming.</p>
                                <p className="provider">Harvard University</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src="https://via.placeholder.com/300x200" alt="" className="img"/>
                            <div className="details">
                                <p className="title">CS50: Understanding Technology</p>
                                <p className="discription">This is CS50’s introduction to technology for students who don’t (yet!) consider themselves computer persons.</p>
                                <p className="provider">Harvard University</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src="https://via.placeholder.com/300x200" alt="" className="img"/>
                            <div className="details">
                                <p className="title">Responsive Web Design</p>
                                <p className="discription">In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.</p>
                                <p className="provider">FreeCodeCamp</p>
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
