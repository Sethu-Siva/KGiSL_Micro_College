import React from "react";
import axios from "axios";

export function AddCustomer()
{

    async function insertCustomer()
    {
        var cust_name = document.getElementById("cust_name").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var pincode = parseInt(document.getElementById("pincode").value);
        var country = document.getElementById("country").value;

        await axios.post("http://localhost:7200/insertCustomer",{cust_name,address,city,pincode,country})
        .then((response) => {
            if ( response.data.status === 'Error' )
            {
                alert("Error");
            }
            else if ( response.data.status === 'Success' )
            {
                alert("Customer Added SuccessFully...!");
                window.location.href = '/';
            }
        })
    }

    return(
        <div>
            <form>

                <label for="cust_name">Enter Name : </label>
                <input type="text" name="cust_name" id="cust_name"/><br/>

                <label for="address">Address : </label>
                <input type="text" name="address" id="address"/><br/>

                <label for="city">City : </label>
                <input type="text" name="city" id="city"/><br/>

                <label for="pincode">Pin Code : </label>
                <input type="text" name="pincode" id="pincode"/><br/>

                <label for="country">Country : </label>
                <input type="text" name="county" id="country"/><br/>

                <input type="button" value="Add Customer" onClick={ insertCustomer }/><br/>
            </form>
        </div>
    );
}