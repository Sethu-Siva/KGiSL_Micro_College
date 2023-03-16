import React from "react";
import { Link } from "react-router-dom";

export function Menu()
{
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link className="navbar-brand active" to="/">Moodle Tasks</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className="nav-link" to="/Hello">Hello</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Congrat">Congrat</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/League">League</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/SocialButtons">Social Buttons</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Notifications">Notifications</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/LoginDesign">LoginDesign</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    );
}