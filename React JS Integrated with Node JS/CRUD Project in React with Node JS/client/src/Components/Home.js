import React from 'react';
import '../Styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function Home()
{
    return(
        <div id="HomePage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="headerSection d-flex justify-content-between">
                            <h1>Customer Details</h1>
                            <div className="d-flex align-items-center searchBox">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                <input type="text" id="searchInput" placeholder="Search"/>
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