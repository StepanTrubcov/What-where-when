import React from "react";
import QuestionText from './Redux-form'
import { Navigate,useNavigate } from "react-router-dom";

class FormText extends React.Component {

  newInformation = (props) => {
    this.props.addquestionText(props.question,props.answer0,props.answer1,props.answer2,props.answer3,props.Timer);
  };

  render() {
    return <QuestionText newInformation={this.newInformation} />
  }
}

export default FormText;
