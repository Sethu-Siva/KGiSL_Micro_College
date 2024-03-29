import React from "react";
import '../Styles/NavBarStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


export function NavigationBar ()
{
    return(
        <div id="navigationSection" className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Sethu Siva</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                
                
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-lg-4">
                                <a className="nav-link" href="#Home">HOME</a>
                            </li>

                            <li className="nav-item dropdown ms-lg-4">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT ME
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#About_Me">About</a></li>
                                    <hr className="dropdown-divider"/>
                                    <li><a className="dropdown-item" href="#Experience">Experience</a></li>
                                    <li><a className="dropdown-item" href="#Education">Education</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown ms-lg-4">
                                <a className="nav-link dropdown-toggle" href="#Skills" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SKILLS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#Skills">Skills</a></li>
                                    <hr className="dropdown-divider"/>
                                    <li><a className="dropdown-item" href="#Soft_Skills">Soft Skills</a></li>
                                    <li><a className="dropdown-item" href="#Tech_Skills">Technical Skills</a></li>
                                </ul>
                            </li>

                            <li className="nav-item ms-lg-4">
                                <a className="nav-link" href="#Projects">PROJECTS</a>
                            </li>

                            <li className="nav-item ms-lg-4">
                                <a className="nav-link" href="#Certificates">CERTIFICATES</a>
                            </li>

                            <li className="nav-item ms-lg-4">
                                <a className="nav-link" href="#Contact">CONTACT ME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}