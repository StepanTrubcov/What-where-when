const ADD_STATE = "formImg/ADD_STATE";


const initialState ={
    questionImg:'',
    correctAnswerImg:'',
    answer0Img:'',
    answer1Img:'',
    answer2Img:'',
    TimerImg:false,
}

const formReducerImg = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STATE:
        return{
            ...state,
            questionImg:action.question,
            correctAnswerImg:action.correctAnswer,
            answer0Img:action.answer0,
            answer1Img:action.answer1,
            answer2Img:action.answer2,
            TimerImg:action.TimerImg
        }
        default:
          return state;
    }
  };
  
  export const addquestionImg =(question,correctAnswer,answer0,answer1,answer2,TimerImg)=>({
      type:ADD_STATE,
      question,
      correctAnswer,
      answer0,
      answer1,
      answer2,
      TimerImg,
  })
  
  export default formReducerImg;