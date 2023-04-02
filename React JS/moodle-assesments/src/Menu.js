import React from "react";
import { Link } from "react-router-dom";

export function Menu()
{
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand active" to="/">Moodle Tasks</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/Hello">Hello</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Congrat">Congrat</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/League">League</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/SocialButtons">Social Buttons</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Notifications">Notifications</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/LoginDesign">Login Design</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/TechCards">Technology Cards</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/HookCounter">Hooks Counter</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/FruitesCounter">Fruites Counter</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/FeedBack">FeedBack</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Date">Date</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    );
}