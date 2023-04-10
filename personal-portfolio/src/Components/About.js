import React from "react";
import '../Styles/AboutStyles.css';
import myPic from '../Media/Images/FB_IMG_1558007904321.jpg';
import TnEdu from '../Media/Images/TN-Edu.png';
import BUEdu from '../Media/Images/B-U_Logo.png';
import KgCasEdu from '../Media/Images/KgCas-Logo.png';
import PMHSS from '../Media/Images/PMHSS.jpg';
import Ejil from '../Media/Images/emerald-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function About()
{
    return (
        <div id="About">
            <div className="seperator"></div>
            <div id="aboutMeSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-10 col-lg-8 aboutMe py-2 pe-3 pe-lg-5">
                            <div className="container-fluid">
                                <div className="row py-5">
                                    <div className="col-12 col-lg-4 text-center my-0">
                                        <img src={ myPic } alt="Sethu-Siva" className="col-8 img-thumbnail"/>
                                    </div>
                                    <div className="col-12 col-lg-8 mt-3 mt-lg-0">
                                        <div className="text-center mb-2 mb-lg-4">
                                            <h3 className="mb-3">About Myself</h3>
                                        </div>
                                        <div>
                                            <p className="abtText">Completed the Full Stack Developer Certificate programme and has practical experience designing, creating, and implementing software and solutions using a variety of programming languages and technologies.</p>
                                            <p className="abtText">In a demanding position as a Full-stack Developer, attempting to make use of my extensive development experience and practical technical knowledge.</p>
                                            <div className="expAndEduBtns mt-2 mt-lg-4">
                                                <span className="">Take a look at my</span><br/>
                                                <a href="#experienceSection" className="expAndEduLink">Experience  <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                                                    </a><br/>
                                                <a href="#educationSection" className="expAndEduLink">Education  <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/></a>
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
            <div className="seperator"></div>
            <div id="experienceSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-4 expText d-flex align-items-center ps-lg-5">
                            <h1 id="experienceText">Experience</h1>
                        </div>
                        <div className="col-12 col-lg-8 expList">
                            <div className="container-fluid">
                                <div className="row educations d-flex align-items-center">
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
                                        <img src={BUEdu} alt="Bharathiar University Logo" className="col-6 col-lg-12 my-3 my-lg-0"/>
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
                                        <img src={KgCasEdu} alt="KGCAS Logo" className="col-6 col-lg-12 my-3 my-lg-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row educations">
                                    <div className="col-12 col-lg-4 d-lg-flex d-inline align-items-center text-center">
                                        <img src={TnEdu} alt="Tn Govt Logo" className="col-6 col-lg-12 my-3 my-lg-0"/>
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
                                        <img src={PMHSS} alt="PMHSS Logo" className="col-6 col-lg-12 my-3 my-lg-0"/>
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
            <div className="seperator"></div>
        </div>
    );
}