import React from "react";
import '../Styles/HomePageStyles.css';
import SethuSivaPic from '../Images/Pic_of_Me-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function HomePage()
{
    return (
        <div id="homepage">
            <div className="container-fluid homeDiv">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5 pageCard">
                                <img src={SethuSivaPic} alt="Sethu Siva" className="col-7 rounded-circle myPic"/>
                                <div className="name">
                                    <p id="nameFont">Sethu</p>
                                    <p id="nameFont">Siva</p>
                                </div>
                                <div id="line"></div>
                                <span id="designationTextInsideCard">DEVELOPER</span>
                                <div id="socialForumsIcons">
                                    <FontAwesomeIcon icon={faGithub} id="icons"/>
                                    <FontAwesomeIcon icon={faFacebook} id="icons"/>
                                    <FontAwesomeIcon icon={faLinkedinIn} id="icons"/>
                                    <FontAwesomeIcon icon={faInstagram} id="icons"/>
                                </div>
                            </div>
                            <div className="col-7 px-4">
                                <p id="helloText">Hi It's Me,</p>
                                <p id="introText">Sethu Siva</p>
                                <p id="certifiedText">CERTIFIED FULL STACK DEVELOPER</p>
                                <p id="apjQuotes">Developed a number of software solutions using a variety of coding languages and has practical knowledge of programming languages like HTML, SQL, and JavaScript.</p>
                                <button type="button" id="resumeBtn" className="btn px-4">RESUME</button>
                                <button type="button" id="projectsBtn" className="btn px-4">PROJECTS</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    );
}