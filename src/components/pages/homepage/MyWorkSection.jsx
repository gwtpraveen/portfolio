import "../../../style/css/page/homepage/myWorkSection.css";
import BounceLetter from "../../common/BounceLetter";

const MyWorkSection = (props) => {
    return ( 
        <section className="myWorkSection" id="mywork">
            <p className="waterMark">WORK</p>
            <h2 className="h2"><BounceLetter>My</BounceLetter> <BounceLetter>Work</BounceLetter></h2>
            <p className="myWorkSection-discription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo neque fugit in amet eaque, est quidem inventore ut laboriosam esse. Libero, velit. Commodi molestias praesentium dolor architecto aliquid in voluptatem.</p>
            <div className="showcase-div">
                <div className="row">
                    <div className="thumbnail thumbnail-right">
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
                <div className="row img-top">
                    <div className="details details-left">
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
                    <div className="thumbnail">
                        <img src="./images/countryapi.jpg" alt="" className="img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="thumbnail thumbnail-right">
                        <img src="./images/spacetourism.jpg" alt="" className="img"/>
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
                <div className="row img-top">
                    <div className="details details-left">
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
                    <div className="thumbnail">
                        <img src="./images/netflix.jpg" alt="" className="img"/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default MyWorkSection;
