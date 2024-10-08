import React from "react";
import c from "./FormImg.module.css";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../validator/validator'
import { Input,InputAns } from '../../common/FormsControls'

let maxLength30 = maxLengthCreator(30)

const ReduxForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={c.blok}>
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
      <div className={c.input} >
        <Field
                  validate={[requiredField]}
          component={InputAns}
          className={c.linie}
          name={'answer0Img'}
        />
        <Field
                  validate={[requiredField]}
          className={c.linie}
          component={InputAns}
          name={'answer1Img'}
        />
      </div>
      <div className={c.input} >
        <Field
                  validate={[requiredField]}
          component={InputAns}
          className={c.linie}
          name={'answer2Img'}
        />
        <Field
          validate={[requiredField]}
          component={InputAns}
          className={c.linie}
          name={'answer3Img'}
        /> 
      </div>
      <div className={c.div} >
        <h2 className={c.Timer} >Timer</h2>
      <Field
      component={'input'}
          type='checkbox'
          className={c.linieTimer}
          name={'TimerImg'}
        />
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
  const onSubmit = (formData) => {
    props.newInformation(formData)
  }
  return (
    <div className={c.information}>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Question;