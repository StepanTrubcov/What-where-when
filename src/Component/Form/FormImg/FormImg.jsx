import React from "react";
import Question from './Redux-formImg'

class FormImg extends React.Component {

  newInformation = (wrongAnswer1,wrongAnswer2,wrongAnswer3,wrongAnswer4,wrongAnswer5) => {
    let object = {
      questionImg: wrongAnswer1,
      correctAnswerImg: wrongAnswer2,
      answer0Img: wrongAnswer3,
      answer1Img: wrongAnswer4,
      answer2Img: wrongAnswer5,
    } 
    this.props.formData.push(object);
  };

  render() {
    return <Question newInformation={this.newInformation} />
  }
}

export default FormImg;