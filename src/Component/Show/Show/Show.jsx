import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Show.module.css";
import shuffle from "../../Function/shuffle";
import swal from "sweetalert";
import Timer from '../../Timer/Timer'


class Show extends React.Component {
  things = [
    this.props.formData.correctAnswer,
    this.props.formData.answer0,
    this.props.formData.answer1,
    this.props.formData.answer2,
  ];

  timer = this.props.formData.Timer

  onAnswer = (event) => {
    const answer = event.target.dataset.value;
    if (answer === this.props.formData.correctAnswer) {
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
    if (this.props.formData.question === "") {
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

    const TimerText = () => {
      if (this.timer === true) {
        return <Timer />
      }
    }

    return (
      <body onload="yourfunction()">
        <div className={c.flex} ><div className={c.Timer} >{TimerText()}</div></div>
        <div className={c.blok}>
          <div>
            <p className={c.Question}>Question?</p>
          </div>
          <div>
            <p className={c.Question}>{this.props.formData.question}</p>
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

export default Show;
