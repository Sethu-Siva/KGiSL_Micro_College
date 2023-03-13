import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoyalChallengersBannerImage from './Royal Challengers.jpg';
import ChennaiSuperKingsBannerImage from './Chennai Super Kings.jpg';

export function League()
{
    return (
        <>
            <div className="container-fluid LeaguePage">
                <div className="container">
                    <div className="row">
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-10 col-lg-8">
                            <div className="leagueTitle">
                                <h1>Super Over League</h1>
                            </div>
                            <div className="BannerImages">
                                <img src={ RoyalChallengersBannerImage } alt="Royal Challengers Banner" className="col-4"/>
                                <img src={ ChennaiSuperKingsBannerImage } alt="Royal Challengers Banner" className="col-4"/>
                            </div>
                        </div>
                        <div className="col-1 col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}