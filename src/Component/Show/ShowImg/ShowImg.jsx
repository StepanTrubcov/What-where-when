import React from "react";
import { NavLink,Navigate } from "react-router-dom";
import c from "./ShowImg.module.css";
import shuffle from "../../Function/shuffle";
import swal from "sweetalert";
import Timer from '../../Timer/Timer'

class ShowImg extends React.Component {
  things = [
    this.props.formDataImg.correctAnswerImg,
    this.props.formDataImg.answer0Img,
    this.props.formDataImg.answer1Img,
    this.props.formDataImg.answer2Img,
  ];

  timer=this.props.formDataImg.TimerImg

  onAnswer = (event) => {
    const answer = event.target.dataset.value;
    if (answer === this.props.formDataImg.correctAnswerImg) {
      this.timer = false 
     return swal({
        title: "Правильно!!!",
        text: "Ты молодец",
        icon: "success",
        button: "Продолжить",
      }) , <Navigate replace to="/choice" />;
    } else {
      return swal({
        title: "Не правильно(",
        text: "Попробуй ещё раз!",
        icon: "error",
        button: "Назад",
      });
    }
  };

  mixer = shuffle(this.things).map((item) => (
      <img 
            data-value={item}
            onClick={this.onAnswer}
            key={item}
      className={c.img} src={item} />
  ));
  render() {
    return (
      <body onload="yourfunction()">
        <div className={c.flex} >
        <div className={c.blok}>
          <div  className={c.Question} >
            <p className={c.Question}>Вопрос</p>
          </div>
          <div>
            <p className={c.Question}>{this.props.formDataImg.questionImg || 'No question'}</p>
          </div>
          <div>
            <p className={c.Answers}>Врянты ответов</p>
          </div>
          <div>{this.mixer}</div>
          <div>
            <NavLink to="/formImg/" className={c.NavLink}>
              Назад
            </NavLink>
          </div>
        </div>
        </div>
      </body>
    );
  }
}

export default ShowImg;
