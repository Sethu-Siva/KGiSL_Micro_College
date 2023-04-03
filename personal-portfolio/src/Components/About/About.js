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
            <div id="educationSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 eduText">
                            <h1 id="educationText">Education</h1>
                        </div>
                        <div className="col-8 listOfEdu">
                            <div className="container-fluid row educations">
                                <div className="col-4">
                                    <img src={BUEdu} alt="Bharathiar University Logo" className="col-12 eduImage"/>
                                </div>
                                <div className="col-8 eduDetails">
                                    <span id="degree">MCA - Master of Computer Applications</span><br/>
                                    <span>Field of Study : Computer Applications</span><br/>
                                    <span>Bharathiar University</span><br/>
                                    <span>Coimbatore</span><br/>
                                    <span>2020 - 2022</span><br/>
                                    <span>CGPA : </span>
                                </div>
                            </div>
                            <div className="container-fluid row educations">
                                <div className="col-8 eduDetails">
                                    <span id="degree">BCA - Bachelor of Computer Applications</span><br/>
                                    <span>Field of Study : Computer Applications</span><br/>
                                    <span>KG College of Arts and Science</span><br/>
                                    <span>Saravanampatti - Coimbatore</span><br/>
                                    <span>2016 - 2019</span><br/>
                                    <span>CGPA : 6.5</span>
                                </div>
                                <div className="col-4">
                                    <img src={KgCasEdu} alt="KGCAS Logo" className="col-12 companyImage"/>
                                </div>
                            </div>
                            <div className="container-fluid row educations">
                                <div className="col-4">
                                    <img src={TnEdu} alt="Tn Govt Logo" className="col-12 eduImage"/>
                                </div>
                                <div className="col-8 eduDetails">
                                    <span id="degree">HSC - Higher Secondary School</span><br/>
                                    <span>Field of Study : Biology & Mathamatics</span><br/>
                                    <span>Goverment Higher Secondary School</span><br/>
                                    <span>Pannimadai - Coimbatore</span><br/>
                                    <span>2014 - 2016</span><br/>
                                    <span>Scored : 713 / 1200</span>
                                </div>
                            </div>
                            <div className="container-fluid row educations">
                                <div className="col-8 eduDetails">
                                    <span id="degree">SSLC - Secondary School</span><br/>
                                    <span>Field of Study : General Education</span><br/>
                                    <span>Pioneer Mills Higher Secondary School</span><br/>
                                    <span>Jothipuram - Coimbatore</span><br/>
                                    <span>2009 - 2014</span><br/>
                                    <span>Scored : 431 / 500</span>
                                </div>
                                <div className="col-4">
                                    <img src={PMHSS} alt="PMHSS Logo" className="col-12 eduImage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experienceSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 expList">
                            <div className="container-fluid row educations">
                                <div className="col-8 eduDetails">
                                    <span id="companyName">Junior Associate</span><br/>
                                    <span>Field of Work : Gold Industry</span><br/>
                                    <span>Emerald Jewel Industry India Limited</span><br/>
                                    <span>Coimbatore</span><br/>
                                    <span>2019-2020</span><br/>
                                </div>
                                <div className="col-4">
                                    <img src={Ejil} alt="PMHSS Logo" className="col-12 companyImage"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 expText">
                            <div className="col-4 expPage">
                                <h1 id="experienceText">Experience</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}