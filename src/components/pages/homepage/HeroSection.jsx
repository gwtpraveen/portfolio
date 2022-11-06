import BounceLetter from "../../common/BounceLetter";
import Navigation from "../Navigation";
import "../../../style/css/page/homepage/heroSection.css";
import "../../../style/css/utils/buttons.css";
import canvasAnimation from "../canvasAnimation";
import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

const HeroSection = (props) => {
    const canvasEle = useRef();
    const heroSection = useRef();

    const handleTheme = () => {
        document.body.classList.toggle("dark");
    };

    useEffect(() => {
        // canvasAnimation();
    })

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline();
            tl.from(".nav", {x: 1000, duration: 2, ease:"back"});
            tl.from(".content-div", { x: -1000, duration: 2, ease:"back"}, "<0.3");
            tl.from(".theme-switch", {opacity:0, duration: 1, ease: "back"});
        }, heroSection)
    }, [])

    return (
        <section className="hero-section" ref={heroSection}>
            <Navigation className="nav"/>
            <div className="content-div">
                <h1 aria-label="Hi, I'm Praveen, Web Developer" className="h1">
                    <BounceLetter className="bounce">Hi,</BounceLetter><br />
                    <BounceLetter className="bounce">I'm</BounceLetter> <BounceLetter className="bounce">Praveen,</BounceLetter><br />
                    <BounceLetter className="bounce">Web</BounceLetter> <BounceLetter className="bounce">Developer.</BounceLetter>
                </h1>
                <p className="discription">Junior Front End Developer</p>
                <a className="btn" href="#mywork">Check My Work</a>
                <button className="theme-switch" onClick={handleTheme} title="theme Switch">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </button>
            </div>
            <canvas id="canvas" className="canvas" ref={canvasEle}></canvas>
        </section>
    );
}

export default HeroSection;