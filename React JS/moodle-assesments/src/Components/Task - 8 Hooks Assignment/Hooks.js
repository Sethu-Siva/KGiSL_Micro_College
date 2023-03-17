import React, {useState} from 'react';

export function HooksCounter()
{
    const [count,setCounter] = useState(0);

    return (
        <>
            <div className="container-fluid text-center">
                <h1>Couner</h1>
                <p className="mt-5">{count}</p>
                <input type="button" className="btn btn-success col-1" value="Increase 1" onClick={()=>setCounter(count+1)}/> 
                <input type="button" className="btn btn-info col-1" value="Decrease 4" onClick={()=>setCounter(count-4)}/> 
                <input type="button" className="btn btn-warning col-1" value="Reset to 0" onClick={()=>setCounter(count*0)}/> 
            </div>
        </>
    );

}