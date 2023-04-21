import React from "react";
import '../Styles/LoginAndReg.css';
import Reg_Pic from '../Media/Images/RegPagePic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faEnvelope, faLock, faPhone, faUnlock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export function Register() {

    async function getValues()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("pwd").value;

        await axios.post('http://localhost:5000/addUser',{name,email,phone,password})

            .then(function (response)
            {
                if(response.data.status === 'Error')
                {
                    alert("Error");
                    window.location.reload();
                }
                else if ( response.data.status === 'Success' )
                {
                    alert("SuccessFully Inserted...!");
                    window.location.href = '/';
                }
            })
            .catch(function (error)
            {
                alert(error);
            });
        }

    return (
        <div>
            <div className="container-fluid page">
                <div className="row">
                    <div className="col-1 col-lg-2"></div>
                    <div className="col-10 col-lg-8 content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 text-center">
                                <img src={Reg_Pic} alt="Reg_pic" className="col-6 col-lg-12 imgPos"/>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="title">
                                    <h1>Sign Up</h1>
                                </div>
                                <form>
                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faUser}/>
                                        <input type="text" name="name" id="name" className="inputBox" placeholder="Your Name" required/>
                                    </div>

                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        <input type="email" name="email" id="email" className="inputBox" placeholder="Email" required/>
                                    </div>

                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faPhone}/>
                                        <input type="tel" name="phone" id="phone" className="inputBox" placeholder="Phone" required/><br/>
                                    </div>

                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faLock}/>
                                        <input type="password" name="password" id="pwd" className="inputBox" placeholder="Password" required/>
                                    </div>

                                    <div className="inputField col-12 col-lg-10">
                                        <FontAwesomeIcon icon={faUnlock}/>
                                        <input type="password" name="cpwd" id="cpwd" className="inputBox" placeholder="Confirm Password" required/>
                                    </div>

                                    <div className="ps-4">
                                        <input type="checkbox" className="mt-4"/>&nbsp;&nbsp;
                                        <span>I agree all statements in <a href='/TermsAndConditions'>T&C</a></span><br/>
                                        <button type="button" className="btn btn-info col-4 mt-4 sub-btn" onClick={getValues}>Sign Up</button>
                                        <p className="mt-4">Already Registered ? <a href="/Login">Sign In Here &nbsp;
                                            <FontAwesomeIcon icon={faArrowCircleRight}/>
                                        </a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}