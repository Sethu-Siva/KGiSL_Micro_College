import React from "react";
import '../Styles/Resume.css';
import ResumePic from '../Images/Sethuraj P-Resume.png';
import ResumePDF from '../PDF/Sethuraj P.pdf';

export function Resume()
{
    function displayResume() 
    {
        var placeOfResume = document.getElementById("PlaceOfResume");
        var displayOption = document.getElementById("displayOption");

        if ( displayOption.innerText === "View" )
        {
            placeOfResume.setAttribute("style","display: inline");
            displayOption.innerText = "Hide";
        }
        else
        {
            placeOfResume.setAttribute("style","display: none");
            displayOption.innerText = "View";
        }
        
    }

    return (
        <div id="ResumeSection">
            <div className="fontainer-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <span id="ResumeText">RESUME</span>
                        <div id="buttonsForResume">
                            <span className="btn buttonsForResume me-3" id="displayOption" onClick={displayResume}>View</span>
                            <a href={ ResumePDF } target="_blank" rel="noreferrer"><span className="btn buttonsForResume me-3">Download</span></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 text-center" id="PlaceOfResume">
                        <img src={ResumePic} alt="Resume" className="col-8 col-lg-12 ResumeBorder"/>
                    </div>
                </div>
            </div>
        </div>
    );
}