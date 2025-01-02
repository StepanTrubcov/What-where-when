import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'

const Navbar = (props) =>{
return(
    <div>
        <NavLink className={c.NavLink} to={'/What-where-when'}  >
         Главная
            </NavLink>
    </div>
)
}

export default Navbar;