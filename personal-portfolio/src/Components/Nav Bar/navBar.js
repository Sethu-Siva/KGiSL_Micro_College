import React from "react";
import '../Styles/NavBarStyles.css';
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoGif from '../Images/logoGif.gif';


export function NavBar ()
{
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={logoGif} alt="logo" className="col-1"/>&nbsp;&nbsp;Sethu Siva
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">ABOUT ME</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/">EDUCATION</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">PROJECTS</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/">SKILLS</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">CERTIFICATES</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/">CONTACT ME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}