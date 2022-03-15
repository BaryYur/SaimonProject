import { Link } from "react-router-dom";

import "./Footer.css";
import footerLogo from "../images/footer-logo.png";

function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo-box">
                    <img src={footerLogo} alt="footer_logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna </p>
                </div>
                <div className="footer__search-container">
                    <p>Search</p>
                    <ul>
                        <li>
                            <Link to="/">Facebook Influencer</Link>
                        </li>
                        <li>
                            <Link to="/">Twitter Influencer</Link>
                        </li>
                        <li>
                            <Link to="/">Instagram Influencer</Link>
                        </li>
                        <li>
                            <Link to="/">Twitter Influencer</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__inform-container">
                    <p>Information</p>
                    <ul>
                        <li>
                            <Link to="/">About Our Company</Link>
                        </li>
                        <li>
                            <Link to="/">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/">Support</Link>
                        </li>
                        <li>
                            <Link to="/">Guidline</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;