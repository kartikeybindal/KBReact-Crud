import {Student} from "../StudentData/Student";
import {useState} from 'react';
import { addStudent } from '../actions/StudAction';
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';

import './AddStudent.css';

function AddStudent(){
    let [flag,setFlag] = useState(false)
    const [student, setStudent] = useState(new Student());
    const setDetails = (e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    let dispatch = useDispatch();

    const test = (e)=>{
        e.preventDefault();
        dispatch(addStudent(student));
        setFlag(true);
        // return(
        //     <>
        //         <Navigate to="/students/showall"/>
        //     </>
            
        // );
    }

    return(
        <>

     <h2 className="head">Add new Student</h2>
        <div>
           {!flag ? 
            <form onSubmit={test}>
                <table className="TableNam">
                    <tbody>
                        <tr>
                            <td><label>Enter Id: </label></td>
                            <td><input type="number" class="field-style field-split align-left" name='studId' value={student.studId} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label>Enter Name: </label></td>
                            <td><input type="text" class="field-style field-split align-right" name='studName' value={student.studName} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label>Enter Department: </label></td>
                            <td><input type="text" class="field-style field-split align-left" name='studDepart' value={student.studDepart} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label>Enter Year: </label></td>
                            <td><input type="text" class="field-style field-split align-right" name='studYear' value={student.studYear} onChange={setDetails}/></td>
                        </tr>
                        <tr className="Td">
                            <td><button type='submit' className="button">SUBMIT</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>:
               <Navigate to={"/students"} />    
            }
         
        </div>

        </>
    );
}

export default AddStudent;