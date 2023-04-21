import React, { useEffect, useState } from "react";
import '../Styles/ShowDatas.css';

export function ShowDatas()
{
    const [values,setValues] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showDatas')
        .then(response => response.json())
        .then(result => setValues(result))
    },[]);
    
    return(
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>User ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values.map((values,index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{values.s_no}</td>
                                    <td>{values.email}</td>
                                    <td>{values.name}</td>
                                    <td>{values.phone}</td>
                                </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}