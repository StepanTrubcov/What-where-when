import React from "react";
import QuestionText from './Redux-form'

class FormText extends React.Component {

  newInformation = (text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3) => {
    let object = {
      question: text,
      correctAnswer: correctPreview,
      answer0: wrongAnswer1,
      answer1: wrongAnswer2,
      answer2: wrongAnswer3,
    } 
    this.props.formData.push(object);
    };
    
  render() {
    console.log(this.props.formData)
    return <QuestionText newInformation={this.newInformation} />
  }
}

export default FormText;
