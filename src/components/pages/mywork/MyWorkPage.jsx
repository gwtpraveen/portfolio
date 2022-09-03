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
                            <p className="details-title">Title</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://www.github.com" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/countryapi.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Title</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://www.github.com" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/netflix.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Title</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://www.github.com" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/todoapp.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Title</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://www.github.com" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="thumbnail">
                            <img src="./images/loopstudio.jpg" alt="" className="img"/>
                        </div>
                        <div className="details">
                            <p className="details-title">Title</p>
                            <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                            <ul className="details-ul">
                                <li className="details-ul_li">HTML</li>
                                <li className="details-ul_li">CSS</li>
                                <li className="details-ul_li">javaScript</li>
                            </ul>
                            <div className="links-div">
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" className="link live-btn">Visit site</a>
                                <a href="https://www.github.com" target="_blank" rel="noreferrer" className="link code-btn">Code</a>
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
