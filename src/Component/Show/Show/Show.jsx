import React from "react";
import c from "./Show.module.css";
import Questionnaire from './Questionnaire/Questionnaire'
import { NavLink } from "react-router-dom";


const Show = (props) => {
  const questionnaire = props.formData.map(f => (
   <Questionnaire question={f.question} correctAnswer={f.correctAnswer} answer0={f.answer0} answer1={f.answer1} answer2={f.answer2} />
  ))

  if(props.formData.length < 1){
    return<div className={c.noText} >
      Вы не ввели вопросы и ответы или не сохранили форму
    </div>
  }

    return (
      <body>
        {questionnaire}
        <div>
      </div>
      </body>
    );
  }


export default Show;