import React, { useState } from "react";
import c from "./FormImg.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../validator/validator'
import { Input, InputAns } from '../../common/FormsControls'
import { Photo } from "../../Function/shuffle";
import { useNavigate } from "react-router-dom";

let maxLength30 = maxLengthCreator(30)

const ReduxForm = ({set,handleSubmit, correctPhoto, correctPreview}) => {
  const [wrongAnswer1, setWrongAnswer1] = useState()
  const [wrongAnswer2, setWrongAnswer2] = useState()
  const [wrongAnswer3, setWrongAnswer3] = useState()
  return (
    <form onSubmit={handleSubmit} className={c.blok}>
      <div>
        <p className={c.Question} >Question for preschoolers</p>
      </div>
      <div>
        <Field
          validate={[requiredField, maxLength30]}
          component={Input}
          className={c.linieQuestion}
          name={'questionImg'}
        />
      </div>
      <div>
        <p className={c.Answers} >Answer with pictures</p>
      </div>
      <div>
        <p className={c.Answers0} >Enter the image address in response</p>
      </div>
      <p className={c.correct} >correct answer</p>
      <div className={c.firstLine} >
        <input className={c.input} type='file' onChange={correctPhoto} />
        <input className={c.input} type='file' onChange={(e) => {
          Photo(e.target.files[0], setWrongAnswer1)
        }} />
      </div>
      <div className={c.images} >
        <img src={correctPreview} className={c.img} ></img>
        <img src={wrongAnswer1} className={c.img} ></img>
      </div>
      <div className={c.firstLine} >
        <input className={c.input} type='file' onChange={(e) => {
          Photo(e.target.files[0], setWrongAnswer2)
        }} />
        <input className={c.input} type='file' onChange={(e) => {
          Photo(e.target.files[0], setWrongAnswer3)
        }} />
      </div>
      <div className={c.images}>
        <img src={wrongAnswer2} className={c.img} ></img>
        <img src={wrongAnswer3} className={c.img} ></img>
      </div>
      <div>
        <button onClick={()=>{set(wrongAnswer1,wrongAnswer2,wrongAnswer3)}} className={c.button}>Save</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "question0",
})(ReduxForm);

const Question = (props) => {

  const [correctPreview, setCorrectPreview] = useState()

  const correctPhoto = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setCorrectPreview(objectUrl)
  }

  const navigate = useNavigate();

  const wrong = []

  const set = (wrongAnswer1,wrongAnswer2,wrongAnswer3) => {
    return wrong.push(wrongAnswer1,wrongAnswer2,wrongAnswer3)
  }

  const onSubmit = (formData) => {
    props.newInformation(formData,correctPreview,wrong[0],wrong[1],wrong[2])
    return navigate('/showImg')
  }
  return (
    <div className={c.information}>
      <LoginReduxForm set={set} correctPreview={correctPreview} correctPhoto={correctPhoto} onSubmit={onSubmit} />
    </div>
  );
};

export default Question;