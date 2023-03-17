import React, {useState} from "react";
import './Styles.css';
import Mango_pic from './Mango_Pic.png';
import Banana_Pic from './Banana_Pic.png';

export function FruiteCounter()
{
    const [counterMangoes,setCounterMangoes] = useState(0);
    const [counterBananas,setCounterBananas] = useState(0);

    return (
        <>
            <div className="container-fluid FruiteCounterPage">
                <div className="row">
                    <div className="col-1 col-lg-2"></div>
                    <div className="col-10 col-lg-8 bg-white text-center contentDiv">
                        <h1>Bob ate <span className="count">{counterMangoes}</span> mangoes <span className="count">{counterBananas}</span> bananas</h1>
                        <div className="row text-center">
                            <div className="col-1 col-lg-1"></div>
                            <div className="col-10 col-lg-10">
                                <div className="row my-3">
                                    <div className="col-12 col-lg-6">
                                        <img src={Mango_pic} alt="Mango Pic" className="col-12"/>
                                        <input type="button" className="btn btn-info col-6 mt-2 p-2 text-white" value="Eat Mango" onClick={()=>setCounterMangoes(counterMangoes+1)}/>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <img src={Banana_Pic} alt="Banana Pic" className="col-12"/>
                                        <input type="button" className="btn btn-info col-6 mt-2 p-2 text-white" value="Eat Banana" onClick={()=>setCounterBananas(counterBananas+1)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 col-lg-1"></div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2"></div>
                </div>
            </div>
        </>
    );
}