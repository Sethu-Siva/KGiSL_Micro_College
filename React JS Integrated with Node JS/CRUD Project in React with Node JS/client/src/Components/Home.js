import React, { useEffect, useState } from 'react';
import '../Styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMagnifyingGlass, faPen, faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Home()
{

    const [custDetails,setCustDetails] = useState([]);

    useEffect( () => {
        fetch("http://localhost:7200/getAllCustDetails")
        .then((response) => response.json())
        .then((result) => setCustDetails(result));
    },[]);


    return(
        <div id="HomePage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="headerSection d-flex justify-content-between">
                            <h1>Customer Details</h1>
                            <div className="d-flex">
                                <div className="btn d-flex justify-content-center addCustomer">
                                    <FontAwesomeIcon icon={ faUserPlus }/>
                                    <span><Link to='/AddCustomer'>Add Customer</Link></span>
                                </div>
                                <div className="d-flex align-items-center searchBox">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    <input type="text" id="searchInput" placeholder="Search"/>
                                </div>
                            </div>
                        </div>
                        <div id="customerDetailsTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>Pin Code</th>
                                        <th>Contry</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        custDetails.map((value,index) => (
                                            <tr>
                                                <td>{ value.cust_id }</td>
                                                <td>{ value.cust_name }</td>
                                                <td>{ value.address }</td>
                                                <td>{ value.city }</td>
                                                <td>{ value.pincode }</td>
                                                <td>{ value.country }</td>
                                                <td>
                                                    <Link to='/showDetails'><FontAwesomeIcon icon={ faEye } className="btn"/></Link>
                                                    <Link to='/editDetails'><FontAwesomeIcon icon={ faPen } className="btn"/></Link>
                                                    <Link to='/deleDetails'><FontAwesomeIcon icon={ faTrashCan } className="btn"/></Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );
}