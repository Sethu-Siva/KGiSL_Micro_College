import React from "react";
import './Style.css';
import DsPic from './DS.png';
import IOT_Dev from './IoT-development-image.png';
import VR_DevPic from './VR_Dev.avif';
import ML_Dev from './ML_Dev.jpg';

export function TechCards()
{
    return(
        <>
            <div className="container-fluid TechCardsPage">
                <div className="row pt-5">
                    <div className="col-1 col-lg-3"></div>
                    <div className="col-10 col-lg-6">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="text-center col-10">
                                <h1>Learn 4.0 Technologies</h1>
                                <p className="mt-4">Get trained by alumni of IITs and top companies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product Development.</p>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-1 col-lg-0"></div>
                            <div className="col-10 col-lg-12">
                                <div className="row">
                                    <div className="col-12 col-lg-5 card_bg pt-4 card_Ds">
                                        <h5>Data Scientist</h5>
                                        <p>A data scientist uses data to understand and explain the phenomena around them, </p>
                                        <div className="PicPosition">
                                            <img src={DsPic} alt="DsPic" className="col-4"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-12 col-lg-5 card_bg pt-4 card_IOT">
                                        <h5>IOT Developer</h5>
                                        <p> IoT Developers are professionals who can develop, manage, </p>
                                        <div className="PicPosition">
                                            <img src={IOT_Dev} alt="IOT_Dev" className="col-4"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5 card_bg pt-4 Card_VR">
                                        <h5>VR Developer</h5>
                                        <p>A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, </p>
                                        <div className="PicPosition">
                                            <img src={VR_DevPic} alt="VR_Dev" className="col-4"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-12 col-lg-5 card_bg pt-4 Card_ML">
                                        <h5>ML Engineer</h5>
                                        <p>A machine learning engineer (ML engineer) is a person in IT who focuses on researching, </p>
                                        <div className="PicPosition">
                                            <img src={ML_Dev} alt="VR_Dev" className="col-4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 col-lg-0"></div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-3"></div>
                </div>
            </div>
        </>
    );
}