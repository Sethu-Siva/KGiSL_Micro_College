import React from "react";
import '../Styles/Skills.css';
import FlexImg from '../Images/flexibility.png';
import TeamWorkImg from '../Images/teamwork.png';
import AdapImg from '../Images/adaptable.png';
import TimeManagImg from '../Images/time-management.png';
import ProbSolImg from '../Images/puzzle-pieces.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faJava, faJs, faLinux, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import OracleDBImage from '../Images/db-oracle.png';
import MySqlDBImage from '../Images/db-mysql.png';
import MongoDBImage from '../Images/db-mongo.png';
import UiPathImage from '../Images/rpa-ui.png';
import AutoAnyImage from '../Images/automation-anywhere-logo-a-only.webp';

export function Skills()
{

    function changeSkillFlex()
    {
        var div = document.getElementById("SkillFlex");

        var tags = `<p>Adapting successfully to changing situations & environments.</p>
                    <p>Keeping calm in the face of difficulties.</p>
                    <p>Planning ahead, but having alternative options in case things go wrong.</p>`;

        div.innerHTML = tags;
    }

    function revertSkillFlex()
    {
        var div = document.getElementById("SkillFlex");

        var tags = `<img src=${FlexImg} alt="Flexibility" class="col-5"/>
                    <hr/>
                    <div>
                        <h6>Flexibility</h6>
                    </div>`;

        div.innerHTML = tags;
    }

    function changeSkillTeamWork()
    {
        var div = document.getElementById("SkillTeamWork");

        var tags = `<p>Communication. Communication is the foundation of effective teamwork. Time management.</p>
                    <p>Problem-solving.</p><p>Listening.</p>`;

        div.innerHTML = tags;
    }

    function revertSkillTeamWork()
    {
        var div = document.getElementById("SkillTeamWork");

        var tags = `<img src=${TeamWorkImg} alt="Team Work" class="col-5"/>
                    <hr/>
                    <div>
                        <h6>Team Work</h6>
                    </div>`;

        div.innerHTML = tags;
    }

    function changeSkillAdap()
    {
        var div = document.getElementById("SkillAdapt");

        var tags = `<p>Working part-time whilst studying, perhaps taking on last-minute shifts.</p>
                    <p>abroad or independent travel abroad.</p>
                    <p>Taking on different roles and responsibilities.</p>`;

        div.innerHTML = tags;
    }

    function revertSkillAdap()
    {
        var div = document.getElementById("SkillAdapt");

        var tags = `<img src=${AdapImg} alt="Adaptability" class="col-5"/>
                    <hr/>
                    <div>
                        <h6>Adaptability</h6>
                    </div>`;

        div.innerHTML = tags;
    }

    function changeSkillTimeManage()
    {
        var div = document.getElementById("SkillTimeManage");

        var tags = `<p>Planning.</p><p>To-do lists and checklists.</p>
                    <p>Prioritizing.</p>
                    <p>Evaluating urgent tasks.</p>`;

        div.innerHTML = tags;
    }

    function revertSkillTimeManage()
    {
        var div = document.getElementById("SkillTimeManage");

        var tags = `<img src=${TimeManagImg} alt="Time Management" class="col-5"/>
                    <hr/>
                    <div>
                        <h6>Time Management</h6>
                    </div>`;

        div.innerHTML = tags;
    }

    function changeSkillProbSol()
    {
        var div = document.getElementById("SkillProbSol");

        var tags = `<p>Active listening.</p>
                    <p>Analysis.</p>
                    <p>Research.</p>
                    <p>Creativity.</p>`;

        div.innerHTML = tags;
    }

    function revertSkillProbSol()
    {
        var div = document.getElementById("SkillProbSol");

        var tags = `<img src=${ProbSolImg} alt="Problem Solving" class="col-5"/>
                    <hr/>
                    <div>
                        <h6>Problem Solving</h6>
                    </div>`;

        div.innerHTML = tags;
    }

    return (
        
        <div id="Skills">
            <div className="container-fluid py-5" id="softSkillSection">
                <div className="text-center">
                    <h1>Skills</h1>
                </div>
                <div className="my-3 ps-5">
                    <h2>Soft Skills</h2>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-0 col-lg-1"></div>
                        <div className="col-12 col-lg-10">
                            <div className="container-fluid">
                                <div className="row text-center">
                                    <div className="col-5 col-lg-3 SkillCards ms-lg-5 ms-3" onMouseEnter={changeSkillFlex} onMouseLeave={revertSkillFlex} id="SkillFlex">
                                        <img src={FlexImg} alt="Flexibility" className="col-5"/>
                                        <hr/>
                                        <div>
                                            <h6>Flexibility</h6>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-5 col-lg-3 SkillCards" onMouseEnter={changeSkillTeamWork} onMouseLeave={revertSkillTeamWork} id="SkillTeamWork">
                                        <img src={TeamWorkImg} alt="Team Work" className="col-5"/>
                                        <hr/>
                                        <div>
                                            <h6>Team Work</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-5 col-lg-3 SkillCards ms-lg-0 ms-3" onMouseEnter={changeSkillAdap} onMouseLeave={revertSkillAdap} id="SkillAdapt">
                                        <img src={AdapImg} alt="Adaptability" className="col-5"/>
                                        <hr/>
                                        <div>
                                            <h6>Adaptability</h6>
                                        </div>
                                    </div>
                                    <div className="col-1 col-lg-3"></div>
                                    <div className="col-5 col-lg-3 SkillCards" onMouseEnter={changeSkillTimeManage} onMouseLeave={revertSkillTimeManage} id="SkillTimeManage">
                                        <img src={TimeManagImg} alt="Time Management" className="col-5"/>
                                        <hr/>
                                        <div>
                                            <h6>Time Management</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-5 col-lg-3 SkillCards ms-lg-0 ms-3" onMouseEnter={changeSkillProbSol} onMouseLeave={revertSkillProbSol} id="SkillProbSol">
                                        <img src={ProbSolImg} alt="Problem Solving" className="col-5"/>
                                        <hr/>
                                        <div>
                                            <h6>Problem Solving</h6>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-lg-1"></div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid py-3" id="techSkillSection">
                <div className="my-5 ps-5">
                    <h2>Technical Skills</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-0 col-lg-1"></div>
                        <div className="col-12 col-lg-10">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-4">
                                        <h3>Web Development</h3>
                                        <div id="Techs">
                                            <div className="align-items-center d-flex my-3">
                                                <span>HyperText Markup Language &nbsp;</span>
                                                <FontAwesomeIcon icon={faHtml5} className="fs-3 htmlIcon"/>
                                            </div>
                                            <div className="progress htmlProgress-moved">
                                                <div className="progress-bar htmlProgress-bar"></div>                       
                                            </div> 
                                        </div>
                                        <div id="Techs">
                                            <div className="align-items-center d-flex my-3">
                                                <span>Cascading Style Sheets &nbsp;</span>
                                                <FontAwesomeIcon icon={faCss3Alt} className="fs-3 cssIcon"/>
                                            </div>
                                            <div className="progress cssProgress-moved">
                                                <div className="progress-bar cssProgress-bar"></div>                       
                                            </div> 
                                        </div>
                                        <div id="Techs">
                                            <div className="align-items-center d-flex my-3">
                                                <span>Bootstrap &nbsp;</span>
                                                <FontAwesomeIcon icon={faBootstrap} className="fs-3 bootIcon"/>
                                            </div>
                                            <div className="progress bootProgress-moved">
                                                <div className="progress-bar bootProgress-bar"></div>                       
                                            </div> 
                                        </div>
                                        <div id="Techs">
                                            <div className="align-items-center d-flex my-3">
                                                <span>JavaScript &nbsp;</span>
                                                <FontAwesomeIcon icon={faJs} className="fs-3 jsIcon"/>
                                            </div>
                                            <div className="progress jsProgress-moved">
                                                <div className="progress-bar jsProgress-bar"></div>                       
                                            </div> 
                                        </div>
                                        <div id="Techs">
                                            <div className="align-items-center d-flex my-3">
                                                <span>React JS &nbsp;</span>
                                                <FontAwesomeIcon icon={faReact} className="fs-3 reactIcon"/>
                                            </div>
                                            <div className="progress reactProgress-moved">
                                                <div className="progress-bar reactProgress-bar"></div>                       
                                            </div> 
                                        </div>
                                        <div id="Techs">
                                            <div className="align-items-center d-flex my-3">
                                                <span>Node JS &nbsp;</span>
                                                <FontAwesomeIcon icon={faNodeJs} className="fs-3 nodeIcon"/>
                                            </div>
                                            <div className="progress nodeProgress-moved">
                                                <div className="progress-bar nodeProgress-bar"></div>                       
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                <h3>Core Languages</h3>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>C Programming &nbsp;</span>
                                                            <FontAwesomeIcon icon={faC} className="fs-5 cIcon"/>
                                                        </div>
                                                        <div className="progress cProgress-moved">
                                                            <div className="progress-bar cProgress-bar"></div>                       
                                                        </div> 
                                                    </div>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>C++ Programming &nbsp;</span>
                                                            <FontAwesomeIcon icon={faC} className="fs-5 cppIcon"/><span className="cppIcon">++</span>
                                                        </div>
                                                        <div className="progress cppProgress-moved">
                                                            <div className="progress-bar cppProgress-bar"></div>                       
                                                        </div> 
                                                    </div>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>Java Programming &nbsp;</span>
                                                            <FontAwesomeIcon icon={faJava} className="fs-3 javaIcon"/>
                                                        </div>
                                                        <div className="progress javaProgress-moved">
                                                            <div className="progress-bar javaProgress-bar"></div>                       
                                                        </div> 
                                                    </div>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>Python Programming &nbsp;</span>
                                                            <FontAwesomeIcon icon={faPython} className="fs-4 pythonIcon"/>
                                                        </div>
                                                        <div className="progress pythonProgress-moved">
                                                            <div className="progress-bar pythonProgress-bar"></div>                       
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 py-4">
                                                    <h3>OS</h3>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>Linux Programming &nbsp;</span>
                                                            <FontAwesomeIcon icon={faLinux} className="fs-4 linuxIcon"/>
                                                        </div>
                                                        <div className="progress linuxProgress-moved">
                                                            <div className="progress-bar linuxProgress-bar"></div>                       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h3>RPA Tools</h3>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>UiPath &nbsp;</span>
                                                            <img src={UiPathImage} alt="RPA-UiPath" className="col-1"/>
                                                        </div>
                                                        <div className="progress uiPathProgress-moved">
                                                            <div className="progress-bar uiPathProgress-bar"></div>                       
                                                        </div>
                                                    </div>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>Automation Anywhere &nbsp;</span>
                                                            <img src={AutoAnyImage} alt="RPA-Automation-Anywhere" className="col-1"/>
                                                        </div>
                                                        <div className="progress aAProgress-moved">
                                                            <div className="progress-bar aAProgress-bar"></div>                       
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 py-4">
                                                <h3>DataBase</h3>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>Oracle Database &nbsp;</span>
                                                            <img src={OracleDBImage} alt="Oracle DB" className="col-1"/>
                                                        </div>
                                                        <div className="progress oracleProgress-moved">
                                                            <div className="progress-bar oracleProgress-bar"></div>                       
                                                        </div> 
                                                    </div>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>MySQL Database &nbsp;</span>
                                                            <img src={MySqlDBImage} alt="MySql DB" className="col-1"/>
                                                        </div>
                                                        <div className="progress mySqlProgress-moved">
                                                            <div className="progress-bar mySqlProgress-bar"></div>                       
                                                        </div> 
                                                    </div>
                                                    <div id="Techs">
                                                        <div className="align-items-center d-flex my-3">
                                                            <span>Mongo DB &nbsp;</span>
                                                            <img src={MongoDBImage} alt="Mongo DB" className="col-1"/>
                                                        </div>
                                                        <div className="progress mongoProgress-moved">
                                                            <div className="progress-bar mongoProgress-bar"></div>                       
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-lg-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}