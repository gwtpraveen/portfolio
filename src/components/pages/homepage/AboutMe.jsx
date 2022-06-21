import "../../../style/css/page/homepage/aboutMe.css";
import BounceLetter from "../../common/BounceLetter";

const AboutMe = (props) => {
    return ( 
        <section className="aboutMe" id="about">
            <div className="details">
            <h2 className="h2"><BounceLetter>About</BounceLetter> <BounceLetter>Me</BounceLetter></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequatur deleniti aliquam mollitia ipsum dolorum quas earum fuga libero magni!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni illo, et exercitationem ipsam recusandae aliquid cum voluptate placeat ducimus.</p>
                <p>Lets work together</p>
            </div>
            <img src="https://via.placeholder.com/700x700" alt="" />
        </section>
     );
}
 
export default AboutMe;
