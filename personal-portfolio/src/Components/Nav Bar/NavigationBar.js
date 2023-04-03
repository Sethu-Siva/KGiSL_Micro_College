import React from "react";
import '../Styles/NavBarStyles.css';
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function NavigationBar ()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Sethu-Siva">Sethu Siva</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/Sethu-Siva" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT ME
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/Sethu-Siva#homepage">Home</a></li>
                                    <li><a class="dropdown-item" href="/Sethu-Siva/About#educationSection">Education</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#experienceSection">Experience</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva/Resume">RESUME</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva/Projects">PROJECTS</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva/Skills">SKILLS</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva/Certificates">CERTIFICATES</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva/Contact">CONTACT ME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}