import "../style/components.css"
import { AiOutlineMenu } from "react-icons/ai";
import { navigate } from "../utils/mailer";

export function Navbar ({ setSliderOpen, setContactOpen }) {
    return (
        <div className="navbar">
           
            <span className="navbar-logo"> Martin Henderson </span>

            <nav className="navbar-navigation">
                <span onClick={() => navigate('#home')}>Home</span>
                <span onClick={() => navigate('#story')}>Story</span>
                <span onClick={() => navigate('#films')}>Films & Tv</span>
                <span onClick={() => navigate('#life')}>About</span>
                <span onClick={() => setContactOpen(true)}>Contact</span>
            </nav>
           
           <span onClick={() => setSliderOpen(true)} className="mobile-menu-icon">
                <AiOutlineMenu />
            </span>
        </div>
    )
}