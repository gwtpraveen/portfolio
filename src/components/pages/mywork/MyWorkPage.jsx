import BounceLetter from "../../common/BounceLetter";
import SubFooter from "../SubFooter";
import "../../../style/css/page/mywork/myWorkPage.css";

const MyWorkPage = (props) => {
    return ( 
        <>
            <section className="mywork">
                <h1 className="h1"><BounceLetter>My</BounceLetter> <BounceLetter>Work</BounceLetter></h1>
                <p className="discription">
                I have spent a lot of time on different projects. I love doing everything from scratch. Here are some of my favorite ones which sum up my knowledge. I have done many small projects from different courses and challenges to learn the basics. You can check them on my <a href="https://www.github.com/gwtpraveen" target="_blank">Github</a>.
                </p>
                <div className="col">
                    <div className="row">
                        <div className="thumbnail">
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

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/joblisting.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
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
                    </div>

                    <div className="row">
                        <div className="thumbnail">
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

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/netflix.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
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
                    </div>

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/countryapi.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Country API</p>
                            <p className="details-discription">Country api is a project made with thrid party API. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country.</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">React</li>
                                <li className="details-ul_li">JSON</li>
                                <li className="details-ul_li">Axios</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://cont-api.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/country-app" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/advicegenerator.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Advice Generator App</p>
                            <p className="details-discription">Using third-party APIs, the advice app generates random advice.
By pressing the button, the user can view other advice.</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                                <li className="details-ul_li">API</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://advice-gen-app.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/Advice-generator" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/loopstudio.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">LoopStudios Landing Page</p>
                            <p className="details-discription">Website for the innovative company Loopstudio, which offers virtual experiences. built as part of frontend mentor challenge.</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://loopst.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/loopstudiios-landing-page" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/todoapp.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Todo APP</p>
                            <p className="details-discription">Advanced ToDo app created using React. The user has the ability to add, delete, and mark tasks as finished. The user has the option to filter tasks and rearrange them using drag and drop. </p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">SCSS</li>
                                <li className="details-ul_li">React</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://whatihavetodo.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/todo-app" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/huddlelandingpage.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Huddle Landing Page</p>
                            <p className="details-discription">landing page built as part of frontend mentor challenge.</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">SCSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://thriving-torrone-084b32.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/huddle-landing-page" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/commentsection.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Interactive Comment Section</p>
                            <p className="details-discription">Users of the interactive comment section can post messages, respond to previously posted messages, and vote up or down on remarks.
It was created using react, and the data is kept in local storage.</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">React</li>
                                <li className="details-ul_li">JSON</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://interactive-comment-section-101.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/interactive-comments-section" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/tipcalculator.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Tip Calculator</p>
                            <p className="details-discription">Tip calculator help your with your bills. It makes it easier to add your tip and even divide the bill and tip among your friends.</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://javascripttip-calculator.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/tip-calculator" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubFooter/>
        </>

     );
}
 
export default MyWorkPage;
