import "../../../style/css/page/homepage/aboutMe.css";
import BounceLetter from "../../common/BounceLetter";
import { useRef, useEffect } from "react";

const AboutMe = (props) => {
    const canvas = useRef();
    useEffect(() => {
        canvas.current.width = 700;
        canvas.current.height = 700;
        const ctx = canvas.current.getContext("2d");

        let width = canvas.current.clientWidth; // Width of the canvas
        let height = canvas.current.clientHeight; // Height of the canvas
        let rotation = 0; // Rotation of the globe
        let dots = [];
        const DOTS_AMOUNT = 20; // Amount of dots on the screen
const DOT_RADIUS = 4; // Radius of the dots
let GLOBE_RADIUS = width * 0.4; // Radius of the globe
let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
let FIELD_OF_VIEW = width * 0.8;

class Dot {
    constructor(x, y, z, text) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.text = text;
      
      this.xProject = 0;
      this.yProject = 0;
      this.sizeProjection = 0;
    }
    // Do some math to project the 3D position into the 2D canvas
    project(sin, cos) {
      const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
      const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
      this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
      this.xProject = (rotX * this.sizeProjection) + PROJECTION_CENTER_X;
      this.yProject = (this.y * this.sizeProjection) + PROJECTION_CENTER_Y;
    }
    // Draw the dot on the canvas
    draw(sin, cos) {
      this.project(sin, cos);
      // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);
      // ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillText(this.text, this.xProject, this.yProject);
      // ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
      // ctx.closePath();
      // ctx.fill();
    }
  }

  const words = ["HTML5", "CSS3", "javaScript", "python", "RESTful API", "git", "gitHub", "VS Code", "Sass", "Scss", "React.js", "figma", "Bootstrap", "tailwind", "ES6+"]

function createDots() {
  // Empty the array of dots
  dots.length = 0;
  let y = -350;
  // Create a new dot based on the amount needed
  for (let i of words) {
    const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
    const phi = Math.acos((Math.random() * 2) - 1); // Random value between [-1, 1]
    
    // Calculate the [x, y, z] coordinates of the dot along the globe
    const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
    // const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
    y += 50;
    const z = (GLOBE_RADIUS * Math.cos(phi)) + GLOBE_CENTER_Z;
    console.log(y)
    dots.push(new Dot(x, y, z, i));
  }
}

function render(a) {
    // Clear the scene
    ctx.clearRect(0, 0, width, height);
    
    // Increase the globe rotation
    rotation = a * 0.0004;
    
    const sineRotation = Math.sin(rotation); // Sine of the rotation
    const cosineRotation = Math.cos(rotation); // Cosine of the rotation
    
    // Loop through the dots array and draw every dot
    for (var i = 0; i < dots.length; i++) {
      dots[i].draw(sineRotation, cosineRotation);
    }
    
    window.requestAnimationFrame(render);
  }

  function afterResize () {
    width = canvas.current.offsetWidth;
    height = canvas.current.offsetHeight;
    if (window.devicePixelRatio > 1) {
      canvas.current.width = canvas.current.clientWidth * 2;
      canvas.current.height = canvas.current.clientHeight * 2;
      ctx.scale(2, 2);
    } else {
      canvas.current.width = width;
      canvas.current.height = height;
    }
    GLOBE_RADIUS = width * 0.7;
    GLOBE_CENTER_Z = -GLOBE_RADIUS;
    PROJECTION_CENTER_X = width / 2;
    PROJECTION_CENTER_Y = height / 2;
    FIELD_OF_VIEW = width * 0.8;
    
    createDots(); // Reset all dots
  }
  
  // Variable used to store a timeout when user resized its screen
  let resizeTimeout;
  // Function called right after user resized its screen
  function onResize () {
    // Clear the timeout variable
    resizeTimeout = window.clearTimeout(resizeTimeout);
    // Store a new timeout to avoid calling afterResize for every resize event
    resizeTimeout = window.setTimeout(afterResize, 500);
  }
  window.addEventListener('resize', onResize);
  
  // Populate the dots array with random dots
  createDots();
  
  // Render the scene
  render();

    })

    return ( 
        <section className="aboutMe" id="about">
            <div className="details">
                <h2 className="h2"><BounceLetter>About</BounceLetter> <BounceLetter>Me</BounceLetter></h2>
                <p className="discription-1 discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequatur deleniti aliquam mollitia ipsum dolorum quas earum fuga libero magni!</p>
                <p className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni illo, et exercitationem ipsam recusandae aliquid cum voluptate placeat ducimus.</p>
                <p className="discription">Lets work together</p>

                <h3 className="h3">Social LInks</h3>
                <div className="social-links">
                    <a href="" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="" className="social-link"><i className="fa-brands fa-github"></i></a>
                    <a href="" className="social-link"><i className="fa-brands fa-codepen"></i></a>
                    <a href="" className="social-link"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/people/Thamindu-Praveen/100082742764466/" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
            <canvas id="canvas" className="canvas" ref={canvas}></canvas>
        </section>
     );
}
 
export default AboutMe;
