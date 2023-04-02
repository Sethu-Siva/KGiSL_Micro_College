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
                    <a className="navbar-brand" href="/">Sethu Siva</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">ABOUT ME</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/">EDUCATION</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">PROJECTS</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/">SKILLS</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">CERTIFICATES</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACT ME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}