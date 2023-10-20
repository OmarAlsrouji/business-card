import React from "react";
import './index.css';

export default function Footer() {
    return (
        <footer className="main-container">
           <div className="social-link">
                <div className="footer-style">
                    <ul className="footer-icons">
                        <li><a className="footer-socials" href="https://github.com/OmarAlsrouji"><i class="ri-github-fill"></i></a></li>
                        <li><a className="footer-socials" href="https://www.linkedin.com/in/omar-mounther-ba7a29253/"><i class="ri-linkedin-box-fill"></i></a></li>
                        <li><a className="footer-socials" href="https://wa.me/+905385073933"><i class="ri-whatsapp-fill"></i></a></li>
                    </ul>
                </div>
           </div>
        </footer>
    )
}