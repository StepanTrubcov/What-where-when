import React from "react";
import { NavLink } from "react-router-dom";
import c from './Choice.module.css'
import End from "../End/End";

const Choice = () => {
    return<div>
     <div className={c.home} >
        <div className={c.blok} >
                <NavLink to='/form' className={c.NavLink0} >Создать викторину</NavLink>
                <p className={c.text}>Ответы в викторине будут текстовыми.</p>
                </div>
            <div className={c.blok1}>
                <NavLink to='/formImg' className={c.NavLink0} >Создать викторину с картинками</NavLink>
                <p className={c.text} >Ответами в викторине будут картинки.</p>
            </div>
        </div>
        <End/>
        </div>
}

export default Choice;