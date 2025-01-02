import React from "react";
import c from "./ShowImg.module.css";
import QuestionnaireImg from "./QuestionnaireImg/QuestionnaireImg";

class ShowImg extends React.Component {

render(){
  console.log(this.props.formDataImg)

 const questionnaireImg = this.props.formDataImg.map(q => (
    <QuestionnaireImg questionImg={q.questionImg} correctAnswerImg={q.correctAnswerImg} answer0Img={q.answer0Img} answer1Img={q.answer1Img} answer2Img={q.answer2Img} />
  ))

if(this.props.formDataImg.length < 1){
  return<div className={c.noText} >
    Вы не ввели вопросы и ответы или не сохранили форму
  </div>
}

    return  <body>
        {questionnaireImg}
      </body>
}
}

export default ShowImg;
