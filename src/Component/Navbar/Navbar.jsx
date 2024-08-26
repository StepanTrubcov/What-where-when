import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'

const Navbar = (props) =>{
return(
    <div>
        <NavLink to={'/form/'}  >
            {/* <img className={c.NavLink} src="https://avatars.mds.yandex.net/i?id=a2ec66a2340167b74f8cb8b9c819f7bd379754a5-8219563-images-thumbs&n=13" /> */}
            <p className={c.NavLink} >Home</p>
            </NavLink>
    </div>
)
}

export default Navbar;