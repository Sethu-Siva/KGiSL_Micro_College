import React from "react";
import '../Styles/Navbar.css';
import logoImage from '../Media/Images/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Navbar()
{
    return (
        <div id="NavBar">
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={ logoImage } alt="Infinite Jobs" width="50px" height="50px"/>&nbsp;&nbsp;
                        <span>Infinite Jobs</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={ faListUl }/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 ms-1 ms-lg-5 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link navFirstLinks px-4" to='/Candidates'>Find Candidates</Link>
                            </li>
                        
                            <li className="nav-item mx-3">
                                <Link className="nav-link navFirstLinks px-4" to='/Job_List'>Find Jobs</Link>
                            </li>
                        
                            <li className="nav-item mx-3">
                                <Link className="nav-link navFirstLinks px-4" to='/Companies'>Find Companies</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to='Notifications'>
                                    <FontAwesomeIcon icon={ faBell } className="fs-4"/>
                                </Link>
                            </li>
                        
                            <li className="nav-item mx-3">
                                <Link className="nav-link logBtn px-4" to='/Login'>Login</Link>
                            </li>
                        
                            <li className="nav-item mx-3">
                                <Link className="nav-link regBtn px-5" to='/Register'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}