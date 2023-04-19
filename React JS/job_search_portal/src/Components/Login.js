import React from "react";
import '../Styles/LoginAndReg.css';
import Log_Pic from '../Media/Images/LoginPagePic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export function Login() {
    return (
        <div>
            <div className="container-fluid page">
                <div className="row">
                    <div className="col-1 col-lg-2"></div>
                    <div className="col-10 col-lg-8 content">
                        <div className="row">
                        <div className="col-sm-12 col-lg-6">
                                <div className="title">
                                    <h1>Sign In</h1>
                                </div>
                                <form action="/LoginProcess">
                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faUser}/>
                                        <input type="email" name="email" className="inputBox" placeholder="Email or Phone" required/>
                                    </div>

                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faLock}/>
                                        <input type="password" name="pwd" className="inputBox" placeholder="Password" required/>
                                    </div>

                                    <div className="ps-5">
                                        <input type="checkbox" className="mt-4"/>&nbsp;&nbsp;
                                        <span>Keep me Signed-in</span><br/>
                                        <input type="submit" value="Sign In" className="btn btn-info col-4 mt-4 sub-btn"/>
                                    </div>
                                    <p className="mt-4">Not having an Account ? <a href="/Register">Sign Up Here &nbsp;
                                        <FontAwesomeIcon icon={faArrowCircleRight}/>
                                        </a>
                                    </p>
                                </form>
                            </div>
                            <div className="col-sm-12 col-lg-6 text-center">
                                <img src={Log_Pic} alt="Reg_pic" className="col-6 col-lg-10 imgPos"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}