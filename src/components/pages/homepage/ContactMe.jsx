import "../../../style/css/page/homepage/contactMe.css";
import BounceLetter from "../../common/BounceLetter";

const ContactMe = (props) => {
    const handleFocus = e => {
        e.target.parentElement.classList.add("active");
    };

    const handleBlur = e => {
        e.target.parentElement.classList.remove("active");
    };

    return ( 
        <section className="contactMe" id="contact">
            <div className="contactMe-content">
                <h2 className="h2"><BounceLetter>Contact</BounceLetter> <BounceLetter>Me</BounceLetter></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam, minus quo dolorem itaque omnis distinctio aspernatur rerum eius iste commodi rem veritatis optio ab?</p>
                <form className="form">
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
                    <input type="submit" value="Send Message!" className="btn"/>
                </form>
            </div>
            <div className="map-container">
                <img src="https://via.placeholder.com/700x700" alt="" className="map"/>
            </div>
        </section>
     );
}
 
export default ContactMe;