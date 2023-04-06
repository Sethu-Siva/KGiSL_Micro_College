import React from "react";
import '../Styles/FooterStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function Footer() 
{
    return (
        <div id="footerSection">
            <hr/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <p>&copy;&nbsp;2023 by Sethu Siva.</p>
                    </div>
                    <div className="col-12 col-lg-2 text-center" id="phoneSection">
                        <span id="phoneText">Call</span>
                        <br/>
                        <span id="phoneNumber">+91 82208 65109</span>
                    </div>
                    <div className="col-12 col-lg-2 text-center" id="emailSection">
                        <span id="emailText">Write</span>
                        <br/>
                        <span id="email">sivarocks742@gmail.com</span>
                    </div>
                    <div className="col-12 col-lg-2 text-center" id="socialSection">
                        <span id="followText">Follow</span><br/>
                        <FontAwesomeIcon icon={faGithub} id="socialIcons"/>
                        <FontAwesomeIcon icon={faFacebook} id="socialIcons"/>
                        <FontAwesomeIcon icon={faLinkedinIn} id="socialIcons"/>
                        <FontAwesomeIcon icon={faInstagram} id="socialIcons"/>
                    </div>
                </div>
            </div>
        </div>
    );
}