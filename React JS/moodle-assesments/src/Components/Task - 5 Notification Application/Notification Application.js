import React from "react";
import './Styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export function Notifications()
{
    return (
        <>
            <div className="container-fluid row NotificationPage">
                <div className="col-1 col-sm-1 col-md-2 col-lg-4"></div>
                <div className="col-10 col-sm-10 col-md-8 col-lg-4">
                    <div>
                        <h1 className="text-center position">Notifications</h1>
                    </div>
                    <div className="col-12 Info_msg bg-info text-white ps-2 pt-3 pe-2 pb-1 mt-5">
                        <p className="ms-4"><FontAwesomeIcon icon={ faCircleCheck }/> &nbsp;&nbsp; Information Message</p>
                    </div>
                    <div className="col-12 Info_msg bg-success text-white ps-2 pt-3 pe-2 pb-1 mt-5">
                        <p className="ms-4"><FontAwesomeIcon icon={ faCircleCheck }/> &nbsp;&nbsp; Success Message</p>
                    </div>
                    <div className="col-12 Info_msg bg-warning text-white ps-2 pt-3 pe-2 pb-1 mt-5">
                        <p className="ms-4"><FontAwesomeIcon icon={ faBell }/> &nbsp;&nbsp; Warning Message</p>
                    </div>
                    <div className="col-12 Info_msg bg-danger text-white ps-2 pt-3 pe-2 pb-1 mt-5">
                        <p className="ms-4"><FontAwesomeIcon icon={ faCircleExclamation } /> &nbsp;&nbsp; Error Message</p>
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-2 col-lg-4"></div>
            </div>
        </>
    );
}