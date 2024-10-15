import React, { useState } from "react";
import c from "./FormImg.module.css";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../validator/validator'
import { Input,InputAns } from '../../common/FormsControls'
import { correctPhoto } from "../../Function/shuffle";

let maxLength30 = maxLengthCreator(30)

const ReduxForm = ({handleSubmit,correctPhoto,correctPreview,wrongPhoto,wrongAnswer1,wrongPhoto2,wrongAnswer2,wrongAnswer3,wrongPhoto3}) => {
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
      <input className={c.input} type='file' onChange={wrongPhoto} />
      </div>
      <div className={c.images} >
      <img src={correctPreview} className={c.img} ></img>
      <img src={wrongAnswer1}  className={c.img} ></img>
      </div>
      <div className={c.firstLine} >
      <input className={c.input} type='file' onChange={wrongPhoto2} />
      <input className={c.input} type='file' onChange={wrongPhoto3} />
      </div>
      <div className={c.images}>
      <img src={wrongAnswer2} className={c.img} ></img>
      <img src={wrongAnswer3} className={c.img} ></img>
      </div>
      <div>
      <button className={c.button}>Save</button>
      <NavLink to='/showImg/' className={c.NavLink} >Show</NavLink>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "question0",
})(ReduxForm);

const Question = (props) => {

  const [correctPreview, setCorrectPreview] = useState()
  const [wrongAnswer1, setWrongAnswer1 ] = useState()
  const [wrongAnswer2, setWrongAnswer2 ] = useState()
  const [wrongAnswer3, setWrongAnswer3 ] = useState()

  const wrongPhoto3 = (e) =>{
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setWrongAnswer3(objectUrl)
  }

  const wrongPhoto2 = (e) =>{
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setWrongAnswer2(objectUrl)
  }

const wrongPhoto1 = (e) =>{
  const objectUrl = URL.createObjectURL(e.target.files[0])
  setWrongAnswer1(objectUrl)
}

const correctPhoto = (e) =>{
  const objectUrl = URL.createObjectURL(e.target.files[0])
  setCorrectPreview(objectUrl)
}

console.log(wrongAnswer1)
  const onSubmit = (formData) => {
    props.newInformation(formData,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3)
  }
  return (
    <div className={c.information}>
      <LoginReduxForm wrongAnswer3={wrongAnswer3} correctPreview={correctPreview} wrongAnswer1={wrongAnswer1} wrongAnswer2={wrongAnswer2} wrongPhoto3={wrongPhoto3} wrongPhoto2={wrongPhoto2} wrongPhoto={wrongPhoto1} correctPhoto={correctPhoto} onSubmit={onSubmit}/>
    </div>
  );
};

export default Question;