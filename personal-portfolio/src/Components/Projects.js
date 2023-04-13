import React from "react";
import '../Styles/Projects.css';
import UiPathImage from '../Media/Images/UiPath_Project_Pic.png';

export function Projects()
{
    return (
        <div id="Projects">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 col-lg-2"></div>
                    <div className="col-10 col-lg-8">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-1 col-lg-6 my-3">
                                    <div class="card">
                                        <img class="card-img-top" src={ UiPathImage } alt="Card cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title">UiPath</h5>
                                            <p class="card-text">UiPath is one of the most popular RPA tools that offers end-to-end solutions to help organizations effectively automate repetitive and redundant tasks.</p>
                                        </div>
                                
                                        <div class="card-body">
                                            <a href="#sdcsd" class="card-link">See Projects</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-6 my-3">
                                    <div class="card">
                                        <img class="card-img-top" src={ UiPathImage } alt="Card cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title">UiPath</h5>
                                            <p class="card-text">UiPath is one of the most popular RPA tools that offers end-to-end solutions to help organizations effectively automate repetitive and redundant tasks.</p>
                                        </div>
                                
                                        <div class="card-body">
                                            <a href="#sdcsd" class="card-link">See Projects</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-6 my-3">
                                    <div class="card">
                                        <img class="card-img-top" src={ UiPathImage } alt="Card cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title">UiPath</h5>
                                            <p class="card-text">UiPath is one of the most popular RPA tools that offers end-to-end solutions to help organizations effectively automate repetitive and redundant tasks.</p>
                                        </div>
                                
                                        <div class="card-body">
                                            <a href="#sdcsd" class="card-link">See Projects</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 col-lg-6 my-3">
                                    <div class="card">
                                        <img class="card-img-top" src={ UiPathImage } alt="Card cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title">UiPath</h5>
                                            <p class="card-text">UiPath is one of the most popular RPA tools that offers end-to-end solutions to help organizations effectively automate repetitive and redundant tasks.</p>
                                        </div>
                                
                                        <div class="card-body">
                                            <a href="#sdcsd" class="card-link">See Projects</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}