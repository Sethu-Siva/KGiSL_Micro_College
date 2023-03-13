import React from "react";
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function SocialButtons()
{
    return (
        <>
            <div className="container-fluid socialButtonsPage">
                <div className="row">
                    <div className="col-1 col-lg-3"></div>
                    <div className="col-10 col-lg-6">
                        <div className="headerDiv">
                            <h1 className="TitleMsg">Social Buttons</h1>
                        </div>
                        <div className="buttons">
                            <input type="button" value="Like" className="btn btn-warning text-white me-5 col-6 col-lg-2"/>
                            <input type="button" value="Comment" className="btn bg-white me-5 col-6 col-lg-2"/>
                            <input type="button" value="Share" className="btn btn-primary text-white me-5 col-6 col-lg-2"/>
                        </div>
                    </div>
                    <div className="col-1 col-lg-3"></div>
                </div>
            </div>
        </>
    );
}