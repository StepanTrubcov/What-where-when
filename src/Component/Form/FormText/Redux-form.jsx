import React, { useState } from "react";
import c from "./Form.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../validator/validator'
import { Input, InputAns } from '../../common/FormsControls'

let maxLength30 = maxLengthCreator(50)

const ReduxForm = (props) => {
  return (
    <div className={c.flex} >
      <form onSubmit={props.handleSubmit} className={c.blok}>
        <div className={c.Question}>
          <p>Вопросы для школьников</p>
        </div>
        <div>
          <Field
            validate={[requiredField, maxLength30]}
            component={Input}
            className={c.linieQuestion}
            name={'question'}
          />
        </div>
        <div className={c.Answers} >
          <p>Ответы</p>
        </div>
        <div className={c.Answers0}>
          <p>В ответы введите текст</p>
        </div>
        <p className={c.correct} >Правильный ответ</p>
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
          <h2 className={c.Timer} >Таймер</h2>
          <Field
            component={'input'}
            type='checkbox'
            className={c.linieTimer}
            name={'Timer'}
          />
          <button onClick={props.setNumberFun} className={c.button}>Сохранить</button>
          <NavLink className={c.NavLink} to='/show/' > Далее </NavLink>
        </div>
      </form>
    </div>
  );
}

const LoginReduxForm = reduxForm({
  form: "question",
})(ReduxForm);

const QuestionText = (props) => {
  const [number, setNumber] = useState(0)

  const onSubmit = (formData) => {
    props.newInformation(formData)
    setNumber(number + 1)
  }

  const setNumberFun = () => {

  }

  return (
    <div className={c.information}>
      <p className={c.text} >Всего вопросов: {number}</p>
      <LoginReduxForm setNumberFun={setNumberFun} onSubmit={onSubmit} />
    </div>
  )
};

export default QuestionText;