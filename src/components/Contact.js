import Footer from "./Footer";
import Title from "./Title";

const Contact =()=>{
    return (
        <div>
            <Title />
            <h4 className="contact">You can contact me at </h4>
            <ul className="contact-list">
                <li>Email:  <strong>vanishapaidimarla@gmail.com</strong></li>
                <li>Phone:   <strong>650-484-7215</strong></li>
                <li>Social: <a href= "https://www.linkedin.com/in/vanisha-p-6b10b9255/" target="_blank"
                style={{textDecoration:'none'}}>LinkedIn</a></li>
            </ul>
            <Footer />
        </div>
    )
}
export default Contact;