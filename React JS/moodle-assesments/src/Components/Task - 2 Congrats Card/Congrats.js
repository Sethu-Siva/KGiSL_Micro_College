import React from "react";
import './Style.css';
import CardProfilePic from './congrats-card-profile-img.png';
import watchPic from './congrats-card-watch-img.png';

export function Congrat()
{
    return (
        <>
            <div className="container-fluid CongratPage">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-lg-4"></div>
                        <div className="col-8 col-sm-10 col-md-8 col-lg-4 col-xl-4">
                            <div className="msg">
                                <h1>Congratulations</h1>
                            </div>
                            <div id="congratCard">
                                <img src={CardProfilePic} alt="Profile Pic" className="col-3"/><br/><br/>
                                <h3>Kiran V</h3>
                                <p>Vishnu institute of Computer Education and Technology, Bhimavaram</p>
                                <img src={watchPic} alt="Watch Pic" className="col-3"/>
                            </div>
                        </div>
                        <div className="col-2 col-lg-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
}