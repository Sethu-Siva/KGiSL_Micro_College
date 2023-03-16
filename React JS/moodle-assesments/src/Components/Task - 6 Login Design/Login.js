import React from "react";
import './Styles.css';
import LoginPic from './Login Pic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function LoginDesign()
{
    return (
        <>
            <div className="container-fluid LoginDesignPage">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 Page">
                        <div className="row">
                            <div className="col-12 col-lg-6 text-center LoginPic">
                                <img src={ LoginPic } alt="LoginPic" className="col-10 col-sm-8"/>
                            </div>
                            <div className="col-12 col-lg-6 text-center my-5">
                                <form>
                                    <legend className="fs-2">Member Login</legend>
                                    <div className="row">
                                        <div className="col-2"></div>
                                        <div className="emailBox col-8">
                                            <FontAwesomeIcon icon={ faEnvelope } />
                                            <input type="text" name="email" className="col-8" placeholder="Email"/>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    );
}