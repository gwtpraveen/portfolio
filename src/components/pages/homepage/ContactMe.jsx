import "../../../style/css/page/homepage/contactMe.css";
import BounceLetter from "../../common/BounceLetter";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


let YOUR_SERVICE_ID = "service_0g8mmrs";
let YOUR_TEMPLATE_ID = "template_0u42kg4";
let YOUR_PUBLIC_KEY = "gAQRP7Tgb2s4t295v";

const ContactMe = (props) => {
    const form = useRef();
    const email = useRef();
    const dark = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";
    const light = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png";


    const handleFocus = e => {
        e.target.parentElement.classList.add("active");
    };

    const handleBlur = e => {
        e.target.parentElement.classList.remove("active");
    };

    const handleSubmit = (e, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY) => {
        e.preventDefault();
        if (email.current.firstElementChild.value !== "") {
            emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("message send")
            }, (error) => {
                console.log(error.text);
                alert("message not send")
            });
            e.target.reset();
        } else {
            alert("please provide your email address")
        }



    };

    return ( 
        <section className="contactMe" id="contact">
            <p className="waterMark">Contact</p>
            <div className="contactMe-content">
                <h2 className="h2"><BounceLetter>Contact</BounceLetter> <BounceLetter>Me</BounceLetter></h2>
                <p className="discription">If you are interested to hire me I am always open to new opportunities and interesting projects! Feel free to contact me if you have any other requests or questions regarding web development.</p>
                <form className="form" method="post" ref={form} onSubmit={(e) => handleSubmit(e, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY)}>
                    <div className="input-group">
                        <input type="text" name="name" id="name" className="input" placeholder="Name" onFocus={handleFocus} onBlur={handleBlur} autoComplete="off"/>
                    </div>
                    <div className="input-group" ref={email}>
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
                <MapContainer center={[6.41887, 80.81877]} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={light}
                    />
                    <Marker position={[6.41887, 80.81877]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
     );
}
 
export default ContactMe;