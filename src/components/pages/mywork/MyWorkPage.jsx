import BounceLetter from "../../common/BounceLetter";
import SubFooter from "../SubFooter";
import "../../../style/css/page/mywork/myWorkPage.css";

const MyWorkPage = (props) => {
    return ( 
        <>
            <section className="mywork">
                <h1 className="h1"><BounceLetter>My</BounceLetter> <BounceLetter>Work</BounceLetter></h1>
                <p className="discription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dolor pariatur aliquam laborum velit accusamus ab, saepe ipsam debitis, impedit quod ullam ut nesciunt alias distinctio possimus minima. Obcaecati, impedit!
                </p>
                <div className="col">
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/urlshorten.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Shortly URL Shortening Site</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <img src="./images/easybank.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">EasyBank Landing Page</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">SCSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://easybanklandingpag.netlify.app/" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://github.com/gwtpraveen/easybank-landing-page" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/huddlelandingpage.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Huddle Landing Page</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
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
