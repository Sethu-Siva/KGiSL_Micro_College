import React from "react";
import '../Styles/Footer.css';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer()
{
    return (
        <div id="FooterSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <span>&copy;&nbsp;Sethu Siva Designs</span>
                    </div>
                    <div className="col-4 text-center">
                        <span><FontAwesomeIcon icon={ faEnvelope }/> &nbsp;infinitejobs@gmail.com </span>
                    </div>
                    <div className="col-4 text-center">
                        <span>Follow us on </span>
                        <FontAwesomeIcon icon={ faFacebook } className="mx-2"/>
                        <FontAwesomeIcon icon={ faLinkedin } className="mx-2"/>
                        <FontAwesomeIcon icon={ faInstagram } className="mx-2"/>
                        <FontAwesomeIcon icon={ faYoutube } className="mx-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}