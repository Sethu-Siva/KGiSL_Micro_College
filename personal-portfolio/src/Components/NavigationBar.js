import React from "react";
import '../Styles/NavBarStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
// import NameLogo from '../Images/Name Logo.gif';


export function NavigationBar ()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Sethu-Siva">
                        {/* <img src={NameLogo} alt="Sethu Siva" width="300"/> */}
                        Sethu Siva
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva#Home">HOME</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Sethu-Siva" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT ME
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#aboutMeSection">About</a></li>
                                    <hr className="dropdown-divider"/>
                                    <li><a className="dropdown-item" href="#experienceSection">Experience</a></li>
                                    <li><a className="dropdown-item" href="#educationSection">Education</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Sethu-Siva/Skills" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SKILLS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Sethu-Siva/Skills/#Skills">Skills</a></li>
                                    <hr className="dropdown-divider"/>
                                    <li><a className="dropdown-item" href="/Sethu-Siva/Skills/#softSkillSection">Soft Skills</a></li>
                                    <li><a className="dropdown-item" href="/Sethu-Siva/Skills/#techSkillSection">Technical Skills</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Sethu-Siva/Projects">PROJECTS</a>
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