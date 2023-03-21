import React from "react";
import './Style.css';
import Sad_Face_Emoji from './Sad_Emoji.png';
import Nutral_Face_Emoji from './Nutral_Emoji.png';
import Happy_Face_Emoji from './Happy_Emoji.png';
import { Link } from "react-router-dom";

export function FeedBack()
{
    return (
        <>
            <div className="container-fluid FeedBackPage">
                <div className="row">
                    <div className="col-1 col-lg-3"></div>
                    <div className="col-10 col-lg-6 ContentDiv text-center">
                        <h3>How Satisfied are you with our customer support performance ? </h3>
                        <div className="row mt-5">
                            <div className="col-4">
                                <Link to='/ThankYou'>
                                    <img src={Sad_Face_Emoji} alt="Sad Face Emoji" className="col-6"/>
                                    <p className="mt-4">Sad</p>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to='/ThankYou'>
                                    <img src={Nutral_Face_Emoji} alt="Nutral Face Emoji" className="col-6"/>
                                    <p className="mt-4">None</p>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to='/ThankYou'>
                                    <img src={Happy_Face_Emoji} alt="Happy Face Emoji" className="col-6"/>
                                    <p className="mt-4">Happy</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-3"></div>
                </div>
            </div>
        </>
    );
}