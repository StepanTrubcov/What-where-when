import React from "react";
import { NavLink } from "react-router-dom";
import c from "../Show.module.css";
import shuffle from "../../../Function/shuffle";
import swal from "sweetalert";

class Questionnaire extends React.Component{

  things = [
     this.props.correctAnswer,
     this.props.answer0,
     this.props.answer1,
     this.props.answer2,
   ];


 onAnswer = (event) => {
     const answer = event.target.dataset.value;
     if (answer === this.props.correctAnswer) {
       return
     } else {
       return swal({
         title: "Не правильно(",
         text: "Попробуй ещё раз",
         icon: "error",
         button: "Назад",
       });
     }
   };

  mixer = shuffle(this.things).map((item) => (
    <button
      data-value={item}
      onClick={this.onAnswer}
      key={item}
      class="btn-multiple"
      className={c.button}
    >
      {item}
    </button>
  ));

  render() {
  return<div>
   <div className={c.blok}>
      <div>
        <p className={c.Question}>Вопрос?</p>
      </div>
      <div>
        <p className={c.Question}>{this.props.question}</p>
      </div>
      <div>
        <p className={c.Answers}>Варианты ответов</p>
      </div>
      <div>{this.mixer}</div>
    </div>
    </div>
    }
}

export default Questionnaire;