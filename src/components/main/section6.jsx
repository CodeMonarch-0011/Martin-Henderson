import { AiFillInstagram } from "react-icons/ai"
import "../../style/main.css"
import { openSocial } from "../../utils/mailer"
import { FaFacebookSquare, FaImdb } from "react-icons/fa"

function Copyright () {
    return (
        <div className="copyright">
            Copyright©2025. All Rights Reserved
        </div>
    )
}

export function Section6 () {
    return (
        <section className="section-6">
            <div className="section-6-cnt">
                <div>Fun Facts About Martin Henderson</div>

                <ul className="section-6-cnt-list">
                    <li>Martin began acting at the age of 13.</li>
                    <li>He turned down university to pursue acting.</li>
                    <li>He has dual citizenship in New Zealand and the United States</li>
                </ul>   
            </div>

            <div className="section-6-contacts-container">
                <button className="button">
                    Contact Us
                </button>

                <div className="section-6-contacts">
                    <span onClick={() => openSocial("https://www.instagram.com/travisfimmel")}> <AiFillInstagram /> </span>
                    <span onClick={() => openSocial("https://m.imdb.com/name/nm1379938")}> <FaImdb /> </span>
                    <span onClick={() => openSocial("https://www.facebook.com/profile.php?id=61564081196362")}> <FaFacebookSquare /> </span>
                </div>
            </div>

            <Copyright />

        </section>
    )
}