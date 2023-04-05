import React from "react";

import FlexImg from '../Images/flexibility.png';
import TeamWorkImg from '../Images/teamwork.png';
import AdapImg from '../Images/adaptable.png';
import TimeManagImg from '../Images/time-management.png';
import ProbSolImg from '../Images/puzzle-pieces.png';

export function Skills()
{
    return (
        <div id="Skills">
            <div className="container-fluid">
                <div className="text-center">
                    <h1>Skills</h1>
                </div>
                <div className="row">
                    <div>
                        <h2>Soft Skills</h2>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="container-fluid">
                            <div className="row text-center">
                                <div className="col-4">
                                    <img src={FlexImg} alt="Flexibility" className="col-5"/>
                                    <hr/>
                                    <p></p>
                                </div>
                                <div className="col-4">
                                    <img src={TeamWorkImg} alt="Flexibility" className="col-5"/>
                                    <hr/>
                                    <p></p>
                                </div>
                                <div className="col-4">
                                    <img src={AdapImg} alt="Flexibility" className="col-5"/>
                                    <hr/>
                                    <p></p>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-4">
                                    <img src={TimeManagImg} alt="Flexibility" className="col-5"/>
                                    <hr/>
                                    <p></p>
                                </div>
                                <div className="col-4">
                                    <img src={ProbSolImg} alt="Flexibility" className="col-5"/>
                                    <hr/>
                                    <p></p>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    );
}