import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {deleteStudent} from "../actions/StudAction";


function DeleteStudent(){
    let {id}=useParams();
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(deleteStudent(parseInt(id)));
    },[]);


    return(
        <>
             <h2>student deleted successfully....</h2>
            <Navigate to="/students/showall"></Navigate>
        </>
    );
}

export default DeleteStudent;