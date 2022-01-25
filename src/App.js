import './App.css';
//import ShowStudent from './ShowStudentComponent/ShowStudent';
//import { StudOpreation } from './StudentData/StudentInterface';

//import ShowStudent from './ShowStudentComponent/ShowStudent';

//let studImpl=new StudOpreation();

import ShowStudents from './Components/ShowStudent';
import DeleteStudent from './Components/DeleteStudent';
import Navbar from './NavbarComponent/Navbar';
import {Route, Routes} from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';

import Footer from './Footer/Footer';
// import ButtonAppBar from './NavBarComponent/Nav';


function App() {
   
  // let deleteStud=()=>{
  //   studImpl.deleteStudent(101);
  // }

  // let showStud=()=>{
  //   studImpl.getAllStudent();

  // }

  // return (
  //   <div className="App">
  //    {/* <button onClick={showStud}>show student</button>
  //    <button onClick={deleteStud}>Test Delete</button> */}
  //    <ShowStudent></ShowStudent>
     
  //   </div>
  // );

  return(
    <div className="App">
      <header>
         <Navbar></Navbar> 
      </header> 
     

     
      <Routes>
        <Route path="/students/showall" element={<ShowStudents></ShowStudents>}></Route>
        <Route path="/students/delete/:id" element={<DeleteStudent></DeleteStudent>}></Route> 
        <Route path="/students/add" element={<AddStudent></AddStudent>}></Route>
        <Route path="/students/update/:id"  element={<UpdateStudent></UpdateStudent>}></Route>
        
      </Routes>
      
      <div className="Foot">
         <Footer></Footer>
      </div>
    </div>
  );



}

export default App;