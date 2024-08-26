import React from "react";
import c from "./Form.module.css";
import { NavLink } from "react-router-dom";

class Form extends React.Component {
  state = {
    question: this.props.formData.question,
    correctAnswer: this.props.formData.correctAnswer,
    answer0: this.props.formData.answer0,
    answer1: this.props.formData.answer1,
    answer2: this.props.formData.answer2,
  };

  create = React.createRef();

  newStateQuestion = (e) => {
    this.setState({
      question: e.currentTarget.value,
    });
  };

  onStateCorrectAnswer = (e) => {
    this.setState({
      correctAnswer: e.currentTarget.value,
    });
  };

  onStateAnswer0 = (e) => {
    this.setState({
      answer0: e.currentTarget.value,
    });
  };

  onStateAnswer1 = (e) => {
    this.setState({
      answer1: e.currentTarget.value,
    });
  };

  onStateAnswer2 = (e) => {
    this.setState({
      answer2: e.currentTarget.value,
    });
  };

  newInformation = () => {
    const tS = this.state
    this.props.addquestion(tS.question,tS.correctAnswer,tS.answer0,tS.answer1,tS.answer1);
    tS.question = "";
    tS.correctAnswer = "";
    tS.answer0 = "";
    tS.answer1 = "";
    tS.answer2 = "";
  };

  render() {
    return (
      <div className={c.blok}>
        <div>
          <p className={c.Question} >Question</p>
        </div>
        <div>
          <input
            onChange={this.newStateQuestion}
            className={c.linieQuestion}
            value={this.state.question}
          />
        </div>
        <div>
          <p className={c.Answers} >Answers</p>
        </div>
        <p className={c.correct} >correct answer</p>
        <div className={c.input} >
          <input
            onChange={this.onStateCorrectAnswer}
            className={c.linie}
            value={this.state.correctAnswer}
          />
          <input
            className={c.linie}
            onChange={this.onStateAnswer0}
            value={this.state.answer0}
          />
        </div>
        <div>
        <input
            onChange={this.onStateAnswer1}
            className={c.linie}
            value={this.state.answer1}
          />
          <input
            onChange={this.onStateAnswer2}
            className={c.linie}
            value={this.state.answer2}
          />
        </div>
        <div>
          <button className={c.button} onClick={this.newInformation}>Save</button>
          <NavLink to='/show/' className={c.NavLink} >Show</NavLink>
        </div>
      </div>
    );
  }
}

export default Form;
