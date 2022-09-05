import "../../../style/css/page/homepage/aboutMe.css";
import BounceLetter from "../../common/BounceLetter";
import { useRef, useEffect } from "react";

const AboutMe = (props) => {

  return (
    <section className="aboutMe" id="about">
      <p className="waterMark">About</p>
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
            <p className="discription">Lets work together</p>
          </div>
        </div>

        <h3 className="h3">Getting touch with me</h3>
        <div className="social-links">
          <a target="_blank" href="https://www.linkedin.com/in/thamindu-praveen-41891b229/" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
          <a target="_blank" href="https://github.com/gwtpraveen" className="social-link"><i className="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://codepen.io/gwtpraveent" className="social-link"><i className="fa-brands fa-codepen"></i></a>
          <a target="_blank" href="https://twitter.com/gwtPraveen" className="social-link"><i className="fa-brands fa-twitter"></i></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100085354600653" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
