import { combineReducers,createStore} from "redux";
import formReducer0 from './Form-reduser'
import formReducerImg from './FormImg-reduser'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
formData:formReducer0,
formDataImg:formReducerImg,
form:formReducer,
})

const store = createStore(reducers);

window.store = store

export default store;