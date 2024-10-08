const ADD_STATE = "form/ADD_STATE";


const initialState ={
    question:'',
    correctAnswer:'',
    answer0:'',
    answer1:'',
    answer2:'',
    Timer:false,
}

const formReducer0 = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STATE:
        return{
            ...state,
            question:action.question,
            correctAnswer:action.correctAnswer,
            answer0:action.answer0,
            answer1:action.answer1,
            answer2:action.answer2,
            Timer:action.Timer,
        }
        default:
          return state;
    }
  };
  
  export const addquestionText =(question,correctAnswer,answer0,answer1,answer2,Timer)=>({
      type:ADD_STATE,
      question,
      correctAnswer,
      answer0,
      answer1,
      answer2,
      Timer,
  })
  
  export default formReducer0;