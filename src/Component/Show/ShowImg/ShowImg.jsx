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
        title: "Right!!!",
        text: "You did a great job with the task.",
        icon: "success",
        button: "Сontinue",
      }) , <Navigate replace to="/choice" />;
    } else {
      return swal({
        title: "Not true!!!",
        text: "Try again.",
        icon: "error",
        button: "try",
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
  const TimerImg = () =>{
    if(this.timer === true){
      return <Timer/>
     }
  }

    return (
      <body onload="yourfunction()">
        <div className={c.Timer} >{TimerImg()}</div>
        <div className={c.blok}>
          <div  className={c.Question} >
            <p className={c.Question}>Question?</p>
          </div>
          <div>
            <p className={c.Question}>{this.props.formDataImg.questionImg || 'No question'}</p>
          </div>
          <div>
            <p className={c.Answers}>Answers</p>
          </div>
          <div>{this.mixer}</div>
          <div>
            <NavLink to="/formImg/" className={c.NavLink}>
              Back
            </NavLink>
          </div>
        </div>
      </body>
    );
  }
}

export default ShowImg;
