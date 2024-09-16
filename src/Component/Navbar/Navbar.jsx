import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'

const Navbar = (props) =>{
return(
    <div>
        <NavLink to={'/choice/'}  >
         <p className={c.NavLink} >Home</p>
            </NavLink>
    </div>
)
}

export default Navbar;