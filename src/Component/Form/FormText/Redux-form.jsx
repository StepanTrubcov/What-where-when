import React, { useState } from "react";
import c from "./Form.module.css";
import { NavLink } from "react-router-dom";
import { reduxForm } from "redux-form";

const ReduxForm = (props) => {

    const [wrongAnswer1, setWrongAnswer1] = useState('')
    const [wrongAnswer2, setWrongAnswer2] = useState('')
    const [wrongAnswer3, setWrongAnswer3] = useState('')
    const [correctPreview, setCorrectPreview] = useState('')
    const [text, setText] = useState('')

    const setImg = () =>{
      props.set(text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3)
      setWrongAnswer1('')
      setWrongAnswer2('')
      setWrongAnswer3('')
      setCorrectPreview('')
      setText('')
    }

  return (
    <div className={c.flex} >
      <form onSubmit={props.handleSubmit} className={c.blok}>
        <div className={c.Question}>
          <p>Вопросы для школьников</p>
        </div>
        <div>
          <input
            className={c.linieQuestion}
            onChange={(e) => {
              setText(e.target.value)
            }}
            value={text}
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
            <input
              className={c.linie}
              onChange={(e) => {
                setCorrectPreview(e.target.value)
              }}
              value={correctPreview}
            />
            <input
            className={c.linie}
              onChange={(e) => {
                setWrongAnswer1(e.target.value)
              }}
              value={wrongAnswer1}
            />
          </div>
          <div className={c.input} >
            <input
              className={c.linie}
              onChange={(e) => {
                setWrongAnswer2(e.target.value)
              }}
              value={wrongAnswer2}
            />
            <input
              className={c.linie}
              onChange={(e) => {
                setWrongAnswer3(e.target.value)
              }}
              value={wrongAnswer3}
            />
          </div>
        </div>
        <div className={c.div} >
          <button onClick={()=>{setImg()}} className={c.button}>Сохранить</button>
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

  const wrong = []

  const set = (text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3) => {
    return wrong.push(text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3)
  }

  const onSubmit = () => {
    props.newInformation(wrong[0],wrong[1],wrong[2],wrong[3],wrong[4])
    setNumber(number + 1)
  }

  return (
    <div className={c.information}>
      <p className={c.text} >Всего вопросов: {number}</p>
      <LoginReduxForm set={set} onSubmit={onSubmit} />
    </div>
  )
};

export default QuestionText;