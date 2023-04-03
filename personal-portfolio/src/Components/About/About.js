import React from "react";
import '../Styles/AboutStyles.css';
import TnEdu from '../Images/TN-Edu.png';
import BUEdu from '../Images/B-U_Logo.png';
import KgCasEdu from '../Images/KgCas-Logo.png';
import PMHSS from '../Images/PMHSS.png';


export function About()
{
    return (
        <div id="About">
            <div id="educationSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 eduPage">
                            <h1 id="educationText">Education</h1>
                        </div>
                        <div className="col-8 listOfEdu">
                            <div className="container-fluid row educations">
                                <div className="col-4">
                                    <img src={BUEdu} alt="Bharathiar University Logo" className="col-12"/>
                                </div>
                                <div className="col-8">
                                    <p>MCA - Master of Computer Applications</p>
                                    <p>Field of Study : Computer Applications</p>
                                    <p>Bharathiar University</p>
                                    <p>Coimbatore</p>
                                    <p>2020 - 2022</p>
                                    <p>CGPA : </p>
                                </div>
                            </div>
                            <div className="container-fluid row">
                                <div className="col-4">
                                    <img src={KgCasEdu} alt="KGCAS Logo" className="col-12"/>
                                </div>
                                <div className="col-8">
                                    <p>BCA - Bachelor of Computer Applications</p>
                                    <p>Field of Study : Computer Applications</p>
                                    <p>KG College of Arts and Science</p>
                                    <p>Saravanampatti - Coimbatore</p>
                                    <p>2016 - 2019</p>
                                    <p>CGPA : 6.5</p>
                                </div>
                            </div>
                            <div className="container-fluid row">
                                <div className="col-4">
                                    <img src={TnEdu} alt="Tn Govt Logo" className="col-12"/>
                                </div>
                                <div className="col-8">
                                    <p>HSC - Higher Secondary School</p>
                                    <p>Field of Study : Biology & Mathamatics</p>
                                    <p>Goverment Higher Secondary School</p>
                                    <p>Pannimadai - CBE</p>
                                    <p>2014 - 2016</p>
                                    <p>Scored : 713 / 1200</p>
                                </div>
                            </div>
                            <div className="container-fluid row">
                                <div className="col-4">
                                    <img src={PMHSS} alt="PMHSS Logo" className="col-12"/>
                                </div>
                                <div className="col-8">
                                    <p>SSLC - Secondary School</p>
                                    <p>Field of Study : General Education</p>
                                    <p>Pioneer Mills Higher Secondary School</p>
                                    <p>Jothipuram - Coimbatore</p>
                                    <p>2009 - 2014</p>
                                    <p>Scored : 431 / 500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experienceSection">

            </div>
        </div>
    );
}