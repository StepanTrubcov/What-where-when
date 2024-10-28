import React from "react";
import c from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../validator/validator'
import { Input, InputAns } from '../../common/FormsControls'

let maxLength30 = maxLengthCreator(30)

const ReduxForm = (props) => {
  return (
    <div className={c.flex} >
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
      <div className={c.firstLine} >
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
      </div>
      <div className={c.div} >
      <h2 className={c.Timer} >Timer</h2>
      <Field
      component={'input'}
          type='checkbox'
          className={c.linieTimer}
          name={'Timer'}
        />
        <button className={c.button}>Save</button>
      </div>
    </form>
    </div>
  );
}

const LoginReduxForm = reduxForm({
  form: "question",
})(ReduxForm);

const QuestionText = (props) => {
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    props.newInformation(formData)
    return navigate('/show')
  }
  return (
    <div className={c.information}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default QuestionText;