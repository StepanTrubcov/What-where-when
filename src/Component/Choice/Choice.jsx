import React from "react";
import { NavLink } from "react-router-dom";
import c from './Choice.module.css'

const Choice = (props) => {
    return <div>
        <div className={c.form} > 
            <div className={c.form0}>
                <NavLink to='/form' className={c.NavLink0} >For schoolchildren</NavLink>
            </div>
            <div className={c.form1}>
                <NavLink to='/formImg' className={c.NavLink1} >For preschoolers</NavLink>
                </div>    
            </div>
            <div className={c.informationText} >
            <div><p className={c.text0}>The answers in the questionnaire will be text.</p>
            <p className={c.information0}>ENTER THE TEXT IN THE REPLY!!!</p>
            </div>
            <div><p className={c.text} >The answers in the questionnaire will be pictures.</p>
                <p className={c.information} >PLEASE INSERT LINKS TO PICTURES IN YOUR ANSWERS!!!</p>
        </div>
        </div>
    </div>
}

export default Choice;