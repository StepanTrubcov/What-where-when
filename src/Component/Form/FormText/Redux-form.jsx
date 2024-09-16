import React from "react";
import c from "./Form.module.css";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../validator/validator'
import { Input, InputAns } from '../../common/FormsControls'

let maxLength30 = maxLengthCreator(30)

const ReduxForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={c.blok}>
      <div>
        <p className={c.Question} >Question for schoolchildren</p>
      </div>
      <div>
        <Field
          validate={[requiredField, maxLength30]}
          component={Input}
          className={c.linieQuestion}
          name={'question'}
        />
      </div>
      <div>
        <p className={c.Answers} >Reply in text</p>
      </div>
      <div>
        <p className={c.Answers0} >In response to enter text</p>
      </div>
      <p className={c.correct} >correct answer</p>
      <div className={c.input} >
        <Field
        validate={[requiredField, maxLength30]}
        component={InputAns}
          className={c.linie}
          name={'answer0'}
        />
        <Field
          className={c.linie}
          validate={[requiredField, maxLength30]}
          component={InputAns}
          name={'answer1'}
        />
      </div>
      <div className={c.input} >
        <Field
validate={[requiredField, maxLength30]}
component={InputAns}
          className={c.linie}
          name={'answer2'}
        />
        <Field
validate={[requiredField, maxLength30]}
component={InputAns}
          className={c.linie}
          name={'answer3'}
        />
      </div>
      <div>
        <button className={c.button}>Save</button>
        <NavLink to='/show/' className={c.NavLink} >Show</NavLink>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "question",
})(ReduxForm);

const Question = (props) => {
  const onSubmit = (formData) => {
    props.newInformation(formData)
  }
  return (
    <div className={c.information}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Question;