import {StudentImpl} from './StudentImpl';

 let studImpl=new StudentImpl();
 let array=studImpl.getAllStudent();
 console.log(array);
 array=studImpl.deleteStudent(101);
 console.log(array);