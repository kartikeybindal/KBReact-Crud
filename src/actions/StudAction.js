export const showStudents=()=>{
    return{
        type:'SHOWSTUDENTS'
    }
}

export const deleteStudent=(stdId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:stdId
    }
}
export let searchStudent=(stdId)=>{
    return{
        type:'SEARCHSTUDENTS',
        payload:stdId
    }
}
export const addStudent = (student)=>{
    return{
        type: 'ADDSTUDENT',
        payload: student
    }
}

export const updateStudent = (student)=>{
    return{
        type: 'UPDATESTUDENT',
        payload:student
    }
}