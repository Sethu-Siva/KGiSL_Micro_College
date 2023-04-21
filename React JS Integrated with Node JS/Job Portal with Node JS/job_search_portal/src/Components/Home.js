import React from "react";
import '../Styles/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function Home()
{
    return (
        <div id="HomePage">
            <span id="titleText">Find the candidates as per your requirements</span>
            <div className="container-fluid" id="filters">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="container-fluid inputBoxes">
                            <div className="row">
                                <div className="col-5">
                                    <div className="d-flex align-items-center jobTitleInput">
                                        <FontAwesomeIcon icon={ faMagnifyingGlass } className="mx-3"/>
                                        <input type="text" id="jobTitleInputBox" placeholder="Job Title / Keyword"/>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="d-flex align-items-center locationInput">
                                        <FontAwesomeIcon icon={ faLocationDot } className="mx-3"/>
                                        <input type="text" id="locationSearchInputBox" placeholder="add Country / City"/>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="searchBtn">
                                        <input type="button" id="searchBtn" value="Search" className="col-12"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    );
}