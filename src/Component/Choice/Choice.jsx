import React from "react";
import { NavLink } from "react-router-dom";
import c from './Choice.module.css'

const Choice = (props) => {
    return <div className={c.home} >
        <div className={c.blok} >
                <NavLink to='/form' className={c.NavLink0} >For schoolchildren</NavLink>
                <img className={c.schoolboy} src="https://i.pinimg.com/originals/df/16/78/df16786e78a1a25df85795c62c57147f.png" ></img>
                <p className={c.text0}>The answers in the questionnaire will be text.</p>
                <p className={c.information0}>ENTER THE TEXT IN THE REPLY!!!</p>
                </div>
            <div className={c.blok1}>
                <NavLink to='/formImg' className={c.NavLink1} >For preschoolers</NavLink>
                <img className={c.preschooler} src="https://avatars.mds.yandex.net/i?id=196e4b46014f316e9f71865874baf9d2f62e626a-3654563-images-thumbs&n=13" ></img>
                <p className={c.text1} >The answers in the questionnaire will be pictures.</p>
                <p className={c.information} >PLEASE INSERT LINKS TO PICTURES IN YOUR ANSWERS!!!</p>
            </div>
        </div>
}

export default Choice;