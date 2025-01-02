import React, { useState } from "react";
import c from "./FormImg.module.css";
import { reduxForm } from "redux-form";
import { Photo } from "../../Function/shuffle";
import { NavLink } from "react-router-dom";

const ReduxForm = ({set,handleSubmit}) => {
  const [wrongAnswer1, setWrongAnswer1] = useState()
  const [wrongAnswer2, setWrongAnswer2] = useState()
  const [wrongAnswer3, setWrongAnswer3] = useState()
  const [correctPreview, setCorrectPreview] = useState()
  const [text, setText] = useState('')

  const setImg = () =>{
    set(text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3)
    setWrongAnswer1()
    setWrongAnswer2()
    setWrongAnswer3()
    setCorrectPreview()
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className={c.blok}>
      <div className={c.Question} >
        <p>Вопросы для дошкольников</p>
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
      <div className={c.Answers}>
        <p>Ответы</p>
      </div>
      <div className={c.Answers0}>
        <p >В ответах будут картинки</p>
      </div>
      <p className={c.correct} >Правильный ответ</p>
      <div className={c.firstLine} >
        <input className={c.input} type='file' onChange={(e) => {
          Photo(e.target.files[0], setCorrectPreview)
        }} />
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
      <div className={c.buttons} >
        <button onClick={()=>{setImg()}} className={c.button}>Сохранить</button>
        <NavLink className={c.NavLink} to='/ShowImg' > Далее </NavLink>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "question0",
})(ReduxForm);

const Question = (props) => {

  const [number, setNumber] = useState(0)

  const wrong = []

  const set = (text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3) => {
    return wrong.push(text,correctPreview,wrongAnswer1,wrongAnswer2,wrongAnswer3)
  }

  const onSubmit = () => {
    setNumber(number + 1)
    props.newInformation(wrong[0],wrong[1],wrong[2],wrong[3],wrong[4])
  }
  return (
    <div className={c.information}>
      <div className={c.number} >Всего вопросов: {number}</div>
      <LoginReduxForm set={set} onSubmit={onSubmit} />
    </div>
  );
};

export default Question;