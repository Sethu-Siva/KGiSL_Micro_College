import React from "react";
import { Link } from "react-router-dom";
import './Styles.css';
import LoginPic from './Login Pic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export function LoginDesign()
{
    return (
        <>
            <div className="container-fluid LoginDesignPage">
                <div className="row">
                    <div className="col-1 col-lg-2"></div>
                    <div className="col-10 col-lg-8 Page">
                        <div className="row">
                            <div className="col-12 col-lg-6 text-center LoginPic">
                                <img src={ LoginPic } alt="LoginPic" className="col-4 col-sm-4 col-lg-8"/>
                            </div>
                            <div className="col-12 col-lg-6 my-5 text-center">
                                <form>
                                    <legend className="fs-2">Member Login</legend>
                                    <div className="row">
                                        <div className="col-2"></div>
                                        <div className="inputBox col-8 mt-3">
                                            <FontAwesomeIcon icon={ faEnvelope } className="col-1" />
                                            <input type="text" name="email" className="col-9" placeholder="Email"/>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2"></div>
                                        <div className="inputBox col-8 mt-4">
                                            <FontAwesomeIcon icon={ faLock } className="col-1" />
                                            <input type="password" name="pwd" className="col-9" placeholder="Password"/>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2"></div>
                                        <div className="subButton col-8 mt-4">
                                            <input type="button" name="sub_btn" className="col-10 text-white" value="LOGIN"/>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>                                        
                                </form>
                                <div className="mt-4">
                                    <Link to="#"><p>Forgot <span className="greenishText">Username / Password ? </span></p></Link>
                                </div>
                                <div className="mt-5">
                                    <Link to="#"><span className="greenishText">Create your account <FontAwesomeIcon icon={faArrowRight} /> </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2"></div>
                </div>
            </div>
        </>
    );
}