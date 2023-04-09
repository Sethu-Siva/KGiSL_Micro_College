import React from "react";
import '../Styles/Resume.css';
import ResumePic from '../Media/Images/Sethuraj P-Resume.png';
import ResumePDF from '../Media/PDF Files/Sethuraj P.pdf';

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
        <div id="ResumeSection" className="py-3 py-lg-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <span id="ResumeText">RESUME</span>
                        <div id="buttonsForResume">
                            <span className="btn buttonsForResume me-3" id="displayOption" onClick={displayResume}>View</span>
                            <a href={ ResumePDF } target="_blank" rel="noreferrer"><span className="btn buttonsForResume me-3">Download</span></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 text-center" id="PlaceOfResume">
                        <img src={ResumePic} alt="Resume" className="col-10 col-lg-10 ResumeBorder"/>
                    </div>
                </div>
            </div>
        </div>
    );
}