import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(6),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  let [searchId, setUser] = useState();

    const update = (e) => {
        setUser(e.target.value);
        console.log(searchId);
    }

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Student Management System
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/students/showall" className={classes.link}>
              Show Students
            </Link>
            <Link to="/students/add" className={classes.link}>
              Add Student
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            </div>
      </Toolbar>
      <div className="d-flex justify-content-center mt-3">

<input type="number" onChange={update} value={searchId} placeholder="Enter ID "></input>
<Link to={`/student/search/${searchId}`}> 
    <button className="btn btn-info mx-2" >Search</button>
</Link>
</div>
    </AppBar>
  );
}
export default Navbar;


// import { NavLink } from "react-router-dom";


// let Navbar=()=>{
//     return(
//         <nav className="Nav">
//              <NavLink to="/">Home</NavLink> 
//             <NavLink to="/students/showall">Show Students</NavLink>
//             <NavLink to="/students/add">Add  Student</NavLink> 
          
//         </nav>
//     );
// }

// export default Navbar;