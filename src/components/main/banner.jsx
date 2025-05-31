import "../../style/main.css"
import { AiFillInstagram } from "react-icons/ai"  
import { FaFacebookSquare, FaImdb } from "react-icons/fa"
import { openMail } from "../../utils/mailer"
import martin_img from "/images/martin (2).jpeg"

export function Banner() {
    return (
        <section className="main-page-banner" id="home">
            <div className="main-page-banner-content">
                
                <span>From Kiwi Roots to Global Stardom</span> 
    
                <div className="main-page-banner-header">
                    Martin Henderson
                </div>

                <button className="button" onClick={() => openMail("artistmanagementinquiries@gmail.com")}>
                    Get in Touch
                </button>
            </div>

            <div className="main-page-banner-bck-img">
                <img src={martin_img} alt="martin-img" />
            </div>

            <div className="banner-contacts">
                <span> <AiFillInstagram /> </span>
                <span> <FaFacebookSquare /> </span>
                <span> <FaImdb /> </span>
                <span> <FaImdb /> </span>
            </div>


        </section>
    )
}