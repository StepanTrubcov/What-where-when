const ADD_STATE = "ADD_STATE";


const initialState ={
    question:'',
    correctAnswer:'',
    answer0:'',
    answer1:'',
    answer2:'',
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STATE:
        return{
            ...state,
            question:action.question,
            correctAnswer:action.correctAnswer,
            answer0:action.answer0,
            answer1:action.answer1,
            answer2:action.answer2,
        }
        default:
          return state;
    }
  };
  
  export const addquestion =(question,correctAnswer,answer0,answer1,answer2)=>({
      type:ADD_STATE,
      question,
      correctAnswer,
      answer0,
      answer1,
      answer2,
  })
  
  export default formReducer;