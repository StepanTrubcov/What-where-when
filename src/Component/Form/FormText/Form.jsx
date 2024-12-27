import React from "react";
import QuestionText from './Redux-form'

class FormText extends React.Component {

  newInformation = (props) => {
    let object = {
      question: props.question,
      correctAnswer: props.answer0,
      answer0: props.answer1,
      answer1: props.answer2,
      answer2: props.answer3,
      Timer: props.Timer,
    } 
    this.props.formData.push(object);
    // window.location.reload()
    };

  

  number = this.props.formData.length

  render() {
    return <QuestionText number={this.number} newInformation={this.newInformation} />
  }
}

export default FormText;
