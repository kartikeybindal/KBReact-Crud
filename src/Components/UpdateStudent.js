import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { addStudent, showStudents } from '../actions/StudAction';
import { Student } from '../StudentData/Student';
import { deleteStudent } from '../actions/StudAction';

import Button from '@mui/material/Button';


import "./Update.css";
import { TextField } from '@material-ui/core';

function UpdateStudent() {
    let [flag, setFlag] = useState(false);
    let { id } = useParams();
    console.log(id);
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    console.log(studentArr);
    let student2 = studentArr.find((element) => {
        return element.studId === parseInt(id)
    });
    
    let [student, setRegisterStudent] = useState(student2);
    console.log(student);

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name + " = " + value)
        setRegisterStudent({ ...student, [name]: value })
    }

    let dispatch = useDispatch();


    function onSubmit(e) {
        e.preventDefault();
        console.log(student)
        dispatch(deleteStudent(parseInt(id)))
        dispatch(addStudent(student));
        setFlag(true);
    }

   

    return (
        <>  
          <h1>Edit Student Info</h1>
            {!flag ?
                <form className="form" onSubmit={onSubmit} method="post" className="Tableform">
                    <table border="1" className='table'>
                        <tr>
                            <th>Id : </th>
                            {/* <td><input type="number" name="StudId" value={student.studId} onChange={handleChange} /></td> */}
                            <td><TextField id="standard-basic" label="Standard" variant="standard" type="number" name="StudId" value={student.studId} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Name : </th>
                            {/* <td><input type="text" name="studName" value={student.studName} onChange={handleChange} /></td> */}
                            <td><TextField id="standard-basic" label="Standard" variant="standard" type="text" name="studName" value={student.studName} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Department : </th>
                            {/* <td><input type="text" name="studDepartment" value={student.studDepartment} onChange={handleChange} /></td> */}
                            <td><TextField id="standard-basic" label="Standard" variant="standard" type="text" name="studDepartment" value={student.studDepartment} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Year : </th>
                            {/* <td><input type="text" name="studYear" value={student.studYear} onChange={handleChange} /></td> */}
                            <td><TextField id="standard-basic" label="Standard" variant="standard" type="text" name="studYear" value={student.studYear} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><Button type="submit" variant="contained" color="success"> Submit</Button></td>
                        </tr>
                    </table>
                </form> :
                <Navigate to={"/students/showall"} />
            }
        </>
    )
}

export default UpdateStudent;