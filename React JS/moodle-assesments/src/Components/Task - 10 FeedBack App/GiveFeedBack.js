import React from "react";
import './Style.css';
import Heart_Pic from './Heart.png';

export function GiveFeedBack()
{
    return(
        <>
            <div className="container-fluid FeedBackPage">
                <div className="row">
                    <div className="col-1 col-lg-3"></div>
                    <div className="col-10 col-lg-6 ContentDiv text-center">
                        <img src={ Heart_Pic } alt="Heart Pic" className="col-4"/>
                        <h3 className="mt-4">Thank You..!</h3>
                        <p className="mt-4">We will use your feedback to improve our customer support performance. </p>
                    </div>
                    <div className="col-1 col-lg-3"></div>
                </div>
            </div>
        </>
    );
}