import React from "react";
import Question from './Redux-formImg'

class FormImg extends React.Component {

  newInformation = (props) => {
    this.props.addquestionImg(props.question,props.answer0,props.answer1,props.answer2,props.answer3);
  };

  render() {
    return <Question newInformation={this.newInformation} />
  }
}

export default FormImg;