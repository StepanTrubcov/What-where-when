import React from "react";
import Question from './Redux-formImg'

class FormImg extends React.Component {

  newInformation = (props,preview,wrongAnswer1,wrongAnswer2,wrongAnswer3) => {
    this.props.addquestionImg(props.questionImg,preview,wrongAnswer1,wrongAnswer2,wrongAnswer3,props.TimerImg);
  };

  render() {
    return <Question newInformation={this.newInformation} />
  }
}

export default FormImg;