import React from "react";
import { NavLink } from "react-router-dom";
import c from "./ShowImg.module.css";
import shuffle from "../../Function/shuffle";
import swal from "sweetalert";

class ShowImg extends React.Component {
  things = [
    this.props.formDataImg.correctAnswer,
    this.props.formDataImg.answer0,
    this.props.formDataImg.answer1,
    this.props.formDataImg.answer2,
  ];
  onAnswer = (event) => {
    const answer = event.target.dataset.value;
    if (answer === this.props.formDataImg.correctAnswer) { 
      debugger 
     return swal({
        title: "Right!!!",
        text: "You did a great job with the task.",
        icon: "success",
        button: "Сontinue",
      });
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
    if (this.props.formDataImg.question === "") {
      return (
        <div className={c.blok}>
          <div>
            <p className={c.text}>
              You haven't entered a question or saved it.
            </p>
          </div>
          <NavLink to="/form/" className={c.NavLink0}>
            Back
          </NavLink>
        </div>
      );
    }
    return (
      <body onload="yourfunction()">
        <div className={c.blok}>
          <div>
            <p className={c.Question}>Question?</p>
          </div>
          <div>
            <p className={c.Question}>{this.props.formDataImg.question}</p>
          </div>
          <div>
            <p className={c.Answers}>Answers</p>
          </div>
          <div>{this.mixer}</div>
          <div>
            <NavLink to="/form/" className={c.NavLink}>
              Back
            </NavLink>
          </div>
        </div>
      </body>
    );
  }
}

export default ShowImg;
