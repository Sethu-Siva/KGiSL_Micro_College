import React from "react";

export function DateFunction ()
{

    function calculate()
    {
        var CourseDate = document.getElementById("courseDate").value;
        var date = new Date(CourseDate);
        date.setDate(date.getDate()+90);
        var temp = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
        alert(temp);
    }

    return (
        <>
            <label>Select Course Starting Date : </label>
            <input type="date" id="courseDate"/>
            <br/>
            <br/>
            <input type="button" onClick={calculate} value="Calculate" className="btn btn-outline-info px-3 py-2"/>
        </>
    );
}