import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import "./ShowStudent.css";


function TableBody(){
    let studAr=useSelector((store)=>store.StudReducer);

    return(
        <>
            {
                studAr.map((student)=>{
                    return(
                        <>
                       
                        <tr key={student.studId}>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studDepart}</td>
                            <td>{student.studYear}</td>
                            <td><NavLink to={`/students/delete/${student.studId}`}>Delete</NavLink>
                            <NavLink to={`/students/update/${student.studId}`}>Update</NavLink></td>
                        </tr>

                       

                        </>
                    );
                })
            }
        </>
    );
}


function ShowStudents(){
    return(
        <>

<h2 className="head">The List of Students</h2>
        <div className="ShowStudent">
            <table className="TableName">
                <tbody>
                   <tr>
                       <th>ID</th><th>Name</th><th>Department</th><th>Year</th><th>Actions</th>
                   </tr>
                   <TableBody></TableBody>
                </tbody>
            </table>
        </div>

        </>
    ); 
}

export default ShowStudents;