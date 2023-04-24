import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UpdateCustomer()
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
        })
        .catch((error) => {alert("API Connection Error\n" + error)})
    },[]);

    function updateCust()
    {
        var cust_name = document.getElementById("cust_name").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var pincode = parseInt(document.getElementById("pincode").value);
        var country = document.getElementById("country").value;

        axios.put("http://localhost:7200/update/" + custID, {cust_name,address,city,pincode,country})
        .then((response) => {
            if ( response.data.status === 'Error' )
            {
                alert("Ohh oh Something went wrong\nError Can't Update...!");
                window.location.href = '/';
            }
            else if ( response.data.status === 'Success' )
            {
                alert("Details Successfully Updated...");
                window.location.href = '/';
            }
        },[])
    }

    return(
        <div id="UpdatePage">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="cust_id">ID</label>
                            </th>
                            <td>
                                : <input type="text" name="cust_id" id="cust_id" value={custID} disabled/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="cust_name">Name</label>
                            </th>
                            <td>
                                : <input type="text" name="cuat_name" id="cust_name" value={custName} onChange={(e) => setCustName(e.target.value)}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="address">Address</label>
                            </th>
                            <td>
                                : <input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="city">City</label>
                            </th>
                            <td>
                                : <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="pincode">Pin Code</label>
                            </th>
                            <td>
                                : <input type="text" name="pincode" id="pincode" value={pinCode} onChange={(e) => setPinCode(e.target.value)}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="country">Country</label>
                            </th>
                            <td>
                                : <input type="text" name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                            </td>
                        </tr>

                        <tr className="text-center">
                            <td colSpan={2}>
                                <input type="button" value="Update"  onClick={updateCust}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}