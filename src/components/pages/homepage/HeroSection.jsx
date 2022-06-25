import BounceLetter from "../../common/BounceLetter";
import Navigation from "../Navigation";
import "../../../style/css/page/homepage/heroSection.css";
import "../../../style/css/utils/buttons.css";
import { useRef, useEffect } from "react";

const HeroSection = (props) => {
    const canvasEle = useRef();
    const handleTheme = () => {
        document.body.classList.toggle("dark");
    };

    useEffect(() => {
        
    })

    return (
        <section className="hero-section">
            <Navigation />
            <div className="content-div">
                <h1 aria-label="Hi, I'm Praveen, Web Developer" className="h1">
                    <BounceLetter>Hi,</BounceLetter><br />
                    <BounceLetter>I'm</BounceLetter> <BounceLetter>Praveen,</BounceLetter><br />
                    <BounceLetter>Web</BounceLetter> <BounceLetter>Developer.</BounceLetter>
                </h1>
                <p className="discription">Junior Front End Developer</p>
                <button className="btn">Check My Work</button>
                <button className="theme-switch" onClick={handleTheme} title="theme Switch">D</button>
            </div>
            <canvas id="canvas" className="canvas" ref={canvasEle}></canvas>
        </section>
    );
}

export default HeroSection;