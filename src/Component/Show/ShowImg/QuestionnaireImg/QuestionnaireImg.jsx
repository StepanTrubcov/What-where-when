import React from "react";
import c from "../ShowImg.module.css";
import shuffle from "../../../Function/shuffle";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

class QuestionnaireImg extends React.Component {

    things = [
        this.props.correctAnswerImg,
        this.props.answer0Img,
        this.props.answer1Img,
        this.props.answer2Img,
      ];
    
      onAnswer = (event) => {
        const answer = event.target.dataset.value;
        if (answer === this.props.correctAnswerImg) {
         return swal({
            title: "Правильно!!!",
            text: "Ты молодец",
            icon: "success",
            button: "Продолжить",
          });
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

    render(){
    return <div className={c.flex} >
        <div className={c.blok}>
            <div className={c.Question} >
                <p className={c.Question}>Вопрос</p>
            </div>
            <div>
                <p className={c.QuestionText}>{this.props.questionImg}</p>
            </div>
            <div>
                <p className={c.Answers}>Врянты ответов</p>
            </div>
            <div>{this.mixer}</div>
        </div>
    </div>
    }
}

export default QuestionnaireImg;