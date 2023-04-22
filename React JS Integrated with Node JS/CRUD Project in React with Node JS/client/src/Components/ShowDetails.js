import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowDetails()
{
    const { cust_id } = useParams();

    const [ custID,setCustID ] = useState(0);
    const [ custName,setCustName ] = useState('');
    const [ address,setAddress ] = useState('');
    const [ city,setCity ] = useState('');
    const [ pinCode,setPinCode ] = useState(0);
    const [ country,setCountry ] = useState('');

    useEffect( () => {
        fetch("http://localhost:7200/getCustDetail/" + cust_id)
        .then((response) => response.json())
        .then((result) => {
            setCustID(result[0].cust_id);
            setCustName(result[0].cust_name);
            setAddress(result[0].address);
            setCity(result[0].city);
            setPinCode(result[0].pincode);
            setCountry(result[0].country);
        },[])
    });

    
    return(
        <div id="customerPage">
            <table>
                <tr>
                    <th>ID : </th>
                    <td>{ custID }</td>
                </tr>

                <tr>
                    <th>Name : </th>
                    <td>{ custName }</td>
                </tr>

                <tr>
                    <th>Address : </th>
                    <td>{ address }</td>
                </tr>

                <tr>
                    <th>City : </th>
                    <td>{ city }</td>
                </tr>

                <tr>
                    <th>Pincode : </th>
                    <td>{ pinCode }</td>
                </tr>

                <tr>
                    <th>Country</th>
                    <td>{ country }</td>
                </tr>
            </table>
        </div>
    );
}