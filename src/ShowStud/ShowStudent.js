import {useEffect,useState} from 'react';
import { StudentImpl } from '../StudentData/StudentImpl';

function TableBody(){
    let studImpl=new StudentImpl();
    let [studAr,setArray]=useState([]);
    useEffect(()=>{
        setArray(studImpl.getAllStudents());
    },[stud]);
    return (
        <>
            {
                studAr.map((student)=>{
                    return(
                        <tr key={student.studId}><td>{student.studId}</td>
                        <td>{student.studName}</td>
                        <td>{student.studDepart}</td>
                        <td>{student.studYear}</td>
                        </tr>
                    );
                })
            }
        </>
    );
        }
    export function ShowStudent(){
        return(
            <table>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
        );
}
