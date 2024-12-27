import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'

const Navbar = (props) =>{
return(
    <div>
        <NavLink to={'/What-where-when'}  >
         <p className={c.NavLink} >Главная</p>
            </NavLink>
    </div>
)
}

export default Navbar;