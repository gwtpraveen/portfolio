import "../../../style/css/page/homepage/myWorkSection.css";
import BounceLetter from "../../common/BounceLetter";
import { Link } from "react-router-dom";

const MyWorkSection = (props) => {
    return ( 
        <section className="myWorkSection" id="mywork">
            <p className="waterMark">WORK</p>
            <h2 className="h2"><BounceLetter>My</BounceLetter> <BounceLetter>Work</BounceLetter></h2>
            <p className="myWorkSection-discription">These are some of my recent projects chosen by me. I have done them all to demonstrate my ability to use certain technologies. There are only a few of them. Would you like to see some more? Visit <Link to="/mywork">my work</Link> page.</p>
            <div className="showcase-div">
                <div className="row">
                    <div className="thumbnail thumbnail-right">
                        <img src="./images/urlshorten.jpg" alt="" className="img"/>
                    </div>
                    <div className="details">
                        <p className="details-title">Shortly URL Shortening Site</p>
                        <p className="details-discription">This project is a fictitious URL shortening service provided by a company called shortly. It stores your shorted URLs and uses local storage to save them. It uses third-party APIs to shorten URLs.</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">SCSS</li>
                            <li className="details-ul_li">javaScript</li>
                            <li className="details-ul_li">API</li>
                        </ul>
                        <div className="links-div">
                            <a href="https://shorten-api.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                            <a href="https://github.com/gwtpraveen/URL-shortening-site" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                        </div>
                    </div>
                </div>

                <div className="row img-top">
                    <div className="details details-left">
                        <p className="details-title">Static Job Listing</p>
                        <p className="details-discription">This is a static job listing site made with React and uses a JSON file to fetch all job data. A user can filter jobs via tags like "frontend jobs", "javascritp", "python" and so on. Newly listed jobs got a new badge, and featured jobs got a feature badge.</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">SCSS</li>
                            <li className="details-ul_li">React</li>
                            <li className="details-ul_li">JSON</li>
                        </ul>
                        <div className="links-div">
                            <a href="https://job-listing-static.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                            <a href="https://github.com/gwtpraveen/static-job-listings" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <img src="./images/joblisting.jpg" alt="" className="img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="thumbnail thumbnail-right">
                        <img src="./images/spacetourism.jpg" alt="" className="img"/>
                    </div>
                    <div className="details">
                        <p className="details-title">Space Tourism Website</p>
                        <p className="details-discription">Space Tourism is a multi-page website built with vanilla JavaScript, CSS, and HTML. It uses Javascript to fetch data and generate HTML with that data. The project was created as part of the front-end mentor challenge.</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">SCSS</li>
                            <li className="details-ul_li">javaScript</li>
                        </ul>
                        <div className="links-div">
                            <a href="https://elated-poitras-4edcf9.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                            <a href="https://github.com/gwtpraveen/space-tourisum-website" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                        </div>
                    </div>
                </div>
                <div className="row img-top">
                    <div className="details details-left">
                        <p className="details-title">Netflix Clone</p>
                        <p className="details-discription">The Netflix clone is made with vanilla javascript, CSS, and HTML. It aims to show how meticulous I am with details.</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">CSS</li>
                            <li className="details-ul_li">javaScript</li>
                        </ul>
                        <div className="links-div">
                            <a href="https://my-netflix-copy.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                            <a href="https://github.com/gwtpraveen/netflix-clone" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <img src="./images/netflix.jpg" alt="" className="img"/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default MyWorkSection;
