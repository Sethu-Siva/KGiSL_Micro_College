import React, { useEffect, useState } from 'react';
import '../Styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMagnifyingGlass, faPen, faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Home()
{

    const [custDetails,setCustDetails] = useState([]);

    useEffect( () => {
        fetch("http://localhost:7200/getAllCustDetails")
        .then((response) => response.json())
        .then((result) => setCustDetails(result))
        .catch((error) => {
            alert("API Cannot Accessable...!\n" + error);
        })
    },[]);

    const deleteCust = ( cust_id ) => {

        axios.post("http://localhost:7200/deleteCust",{ cust_id })
        .then((response) => {

            if ( response.data.status === 'Error' )
            {
                alert("Error..! Can't Delete data.");
                window.location.reload();
            }
            else if ( response.data.status === 'Success' )
            {
                alert("Customer Deleted SuccessFully...!");
                window.location.reload();
            }
        })

    }

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
                            <table id="HomeTable">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Customer Name</th>
                                        <th>Customer ID</th>
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
                                                <td>{ index + 1 }</td>
                                                <td>{ value.cust_name }</td>
                                                <td>{ value.cust_id }</td>
                                                <td>{ value.address }</td>
                                                <td>{ value.city }</td>
                                                <td>{ value.pincode }</td>
                                                <td>{ value.country }</td>
                                                <td>
                                                    <Link to={ "/showDetails/" + value.cust_id }>
                                                        <FontAwesomeIcon icon={ faEye } className="btn" id="viewIcon"/>
                                                    </Link>

                                                    <Link to={ "/editDetails/" + value.cust_id }>
                                                        <FontAwesomeIcon icon={ faPen } className="btn" id="editIcon"/>
                                                    </Link>
                                                    
                                                    <FontAwesomeIcon icon={ faTrashCan } className="btn" id="deleIcon" onClick={ () => { deleteCust(value.cust_id) } }/>
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