import React from 'react';
import axios from 'axios';

const Student = ()=>{
    const [name, setName] = React.useState("");
    const [standard, setStandard] = React.useState("");
    const [rollNo, setRollNo] = React.useState([]);


    return(
        <form>
            <h3>Student Registration portal</h3>
            <div className="form-group">
                <label>
                    Enter student Name:
                </label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>
                    Enter student class:
                </label>
                <input type="text" className="form-control" onChange={(e)=>setStandard(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>
                    Enter student RollNo:
                </label>
                <input type="number" className="form-control" onChange={(e)=>setRollNo(e.target.value)}/>
            </div>
            
        </form>
    )
}