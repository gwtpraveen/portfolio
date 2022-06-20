import "../../../style/css/page/homepage/myWorkSection.css";

const MyWorkSection = (props) => {
    return ( 
        <section className="myWorkSection">
            <h2 className="h2">My Work</h2>
            <p className="myWorkSection-discription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo neque fugit in amet eaque, est quidem inventore ut laboriosam esse. Libero, velit. Commodi molestias praesentium dolor architecto aliquid in voluptatem.</p>
            <div className="showcase-div">
                <div className="row">
                    <img src="https://via.placeholder.com/600x400" alt="" className="thumbnail thumbnail-right"/>
                    <div className="details">
                        <p className="details-title">Title</p>
                        <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">CSS</li>
                            <li className="details-ul_li">javaScript</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="details details-left">
                        <p className="details-title">Title</p>
                        <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">CSS</li>
                            <li className="details-ul_li">javaScript</li>
                        </ul>
                    </div>
                    <img src="https://via.placeholder.com/600x400" alt="" className="thumbnail"/>
                </div>
                <div className="row">
                    <img src="https://via.placeholder.com/600x400" alt="" className="thumbnail thumbnail-right"/>
                    <div className="details">
                        <p className="details-title">Title</p>
                        <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">CSS</li>
                            <li className="details-ul_li">javaScript</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="details details-left">
                        <p className="details-title">Title</p>
                        <p className="details-discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore, distinctio fugit molestiae rerum reiciendis commodi officia impedit error repudiandae molestias labore minima amet. Sunt?</p>
                        <ul className="details-ul">
                            <li className="details-ul_li">HTML</li>
                            <li className="details-ul_li">CSS</li>
                            <li className="details-ul_li">javaScript</li>
                        </ul>
                    </div>
                    <img src="https://via.placeholder.com/600x400" alt="" className="thumbnail"/>
                </div>
            </div>
        </section>
     );
}
 
export default MyWorkSection;