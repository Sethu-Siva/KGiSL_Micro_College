import React from "react";
import '../Styles/AboutStyles.css';
import TnEdu from '../Images/TN-Edu.png';
import BUEdu from '../Images/B-U_Logo.png';
import KgCasEdu from '../Images/KgCas-Logo.png';
import PMHSS from '../Images/PMHSS.png';
import Ejil from '../Images/emerald-logo.png';

export function About()
{
    return (
        <div id="About">
            <div className="seperator"></div>
            <div id="experienceSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-4 expText d-flex align-items-center ps-lg-5">
                            <h1 id="experienceText">Experience</h1>
                        </div>
                        <div className="col-12 col-lg-8 expList">
                            <div className="container-fluid">
                                <div className="row educations">
                                    <div className="col-12 col-lg-4 d-lg-flex d-inline align-items-center text-center">
                                        <img src={Ejil} alt="Emerald Logo" className="col-6 col-lg-8 my-3 my-lg-0"/>
                                    </div>
                                    <div className="col-12 col-lg-8 eduDetails">
                                        <span id="companyName">Junior Associate</span><br/>
                                        <span>Field of Work : Gold Industry</span><br/>
                                        <span>Emerald Jewel Industry India Limited</span><br/>
                                        <span>Coimbatore</span><br/>
                                        <span>2019-2020</span><br/>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="seperator"></div>
            <div id="educationSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-8 listOfEdu order-last order-lg-first">
                            <div className="container-fluid">
                                <div className="row educations">
                                    <div className="col-12 col-lg-4 d-lg-flex d-inline align-items-center text-center">
                                        <img src={BUEdu} alt="Bharathiar University Logo" className="col-6 col-lg-8 my-3 my-lg-0"/>
                                    </div>
                                    <div className="col-12 col-lg-8 eduDetails">
                                        <span id="degree">MCA - Master of Computer Applications</span><br/>
                                        <span>Field of Study : Computer Applications</span><br/>
                                        <span>Bharathiar University</span><br/>
                                        <span>Coimbatore</span><br/>
                                        <span>2020 - 2022</span><br/>
                                        <span>CGPA : </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row educations">
                                    <div className="col-12 col-lg-8 eduDetails order-last order-lg-first">
                                        <span id="degree">BCA - Bachelor of Computer Applications</span><br/>
                                        <span>Field of Study : Computer Applications</span><br/>
                                        <span>KG College of Arts and Science</span><br/>
                                        <span>Saravanampatti - Coimbatore</span><br/>
                                        <span>2016 - 2019</span><br/>
                                        <span>CGPA : 6.5</span>
                                    </div>
                                    <div className="col-12 col-lg-4 d-lg-flex d-inline align-items-center text-center order-first order-lg-last">
                                        <img src={KgCasEdu} alt="KGCAS Logo" className="col-6 col-lg-8 my-3 my-lg-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row educations">
                                    <div className="col-12 col-lg-4 d-lg-flex d-inline align-items-center text-center">
                                        <img src={TnEdu} alt="Tn Govt Logo" className="col-6 col-lg-8 my-3 my-lg-0"/>
                                    </div>
                                    <div className="col-12 col-lg-8 eduDetails">
                                        <span id="degree">HSC - Higher Secondary School</span><br/>
                                        <span>Field of Study : Biology & Mathamatics</span><br/>
                                        <span>Goverment Higher Secondary School</span><br/>
                                        <span>Pannimadai - Coimbatore</span><br/>
                                        <span>2014 - 2016</span><br/>
                                        <span>Scored : 713 / 1200</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row educations">
                                    <div className="col-12 col-lg-8 eduDetails order-last order-lg-first">
                                        <span id="degree">SSLC - Secondary School</span><br/>
                                        <span>Field of Study : General Education</span><br/>
                                        <span>Pioneer Mills Higher Secondary School</span><br/>
                                        <span>Jothipuram - Coimbatore</span><br/>
                                        <span>2009 - 2014</span><br/>
                                        <span>Scored : 431 / 500</span>
                                    </div>
                                    <div className="col-12 col-lg-4 d-lg-flex d-inline align-items-center text-center order-first order-lg-last">
                                        <img src={PMHSS} alt="PMHSS Logo" className="col-6 col-lg-8 rounded-circle my-3 my-lg-0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 eduText d-flex align-items-center order-first order-lg-last">
                            <h1 id="educationText" className="ms-2 ms-lg-3">Education</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}