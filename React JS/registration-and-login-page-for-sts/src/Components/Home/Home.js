import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="container-fluid">
            <div className="row p-3">
                <div className="col-2">
                    <h2><Link to='#' className="nav-link">KGiSL</Link></h2>
                </div>
                <div className="col-8"></div>
                <div className="col-2">
                    <Link to='/Register' className="btn btn-success text-white me-3">Register</Link>
                    <Link to='/Login' className="btn btn-info text-white">Login</Link>
                </div>  
                <hr className="mt-2"/>
            </div>
        </div>
    );
}