import React from "react";
import Question from './Redux-formImg'

class FormImg extends React.Component {

  newInformation = (props) => {
    console.log(props)
    this.props.addquestionImg(props.questionImg,props.answer0Img,props.answer1Img,props.answer2Img,props.answer3Img,props.TimerImg);
  };

  render() {
    return <Question newInformation={this.newInformation} />
  }
}

export default FormImg;