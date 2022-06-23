import "../../../style/css/page/homepage/contactMe.css";
import BounceLetter from "../../common/BounceLetter";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


let YOUR_SERVICE_ID = "service_0g8mmrs";
let YOUR_TEMPLATE_ID = "template_0u42kg4";
let YOUR_PUBLIC_KEY = "gAQRP7Tgb2s4t295v";

const ContactMe = (props) => {
    const form = useRef();


    const handleFocus = e => {
        e.target.parentElement.classList.add("active");
    };

    const handleBlur = e => {
        e.target.parentElement.classList.remove("active");
    };

    const handleSubmit = (e, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert("message send")
        }, (error) => {
            console.log(error.text);
            alert("message not send")
        });

        e.target.reset();

    };

    return ( 
        <section className="contactMe" id="contact">
            <div className="contactMe-content">
                <h2 className="h2"><BounceLetter>Contact</BounceLetter> <BounceLetter>Me</BounceLetter></h2>
                <p className="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam, minus quo dolorem itaque omnis distinctio aspernatur rerum eius iste commodi rem veritatis optio ab?</p>
                <form className="form" method="post" ref={form} onSubmit={(e) => handleSubmit(e, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY)}>
                    <div className="input-group">
                        <input type="text" name="name" id="name" className="input" placeholder="Name" onFocus={handleFocus} onBlur={handleBlur} autoComplete="off"/>
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" id="email" className="input" placeholder="E-mail" onFocus={handleFocus} onBlur={handleBlur} autoComplete="off"/>
                    </div>
                    <div className="input-group">
                        <input type="text" name="subject" id="subject" className="input" placeholder="Subject" onFocus={handleFocus} onBlur={handleBlur} autoComplete="off"/>
                    </div>
                    <div className="input-group">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" onFocus={handleFocus} onBlur={handleBlur} autoComplete="off"></textarea>
                    </div>
                    <input type="submit" value="Send Message!" className="btn outline"/>
                </form>
            </div>
            <div className="map-container">
                <div id="map" className="map"></div>
            </div>
        </section>
     );
}
 
export default ContactMe;