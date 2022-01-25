import {Student} from './Student';



export class StudentImpl{

    studArray = new Set();

    constructor(){
        this.studArray.add(new Student(101,'Mike','CSE','SE'));
        this.studArray.add(new Student(100,'Sam', 'EXTC','SE'));
    }

    getAllStudent(){
        return [...this.studArray];
    }

    addStudent(stud){
        let newStud=new Student(parseInt(stud.studId),stud.studName,stud.studDepartment,stud.studYear);
        this.studArray.add(newStud);
     //   this.studArray.add(stud);
        return [...this.studArray];
    }

    searchStudent(stdId){
        return [...this.studArray].find((student) => student.studId === stdId);
        
    }
    deleteStudent(stdId){
        let student = this.searchStudent(stdId);
        this.studArray.delete(student);
        return [...this.studArray];
    }
}