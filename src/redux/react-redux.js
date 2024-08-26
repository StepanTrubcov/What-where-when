import { combineReducers, legacy_createStore as createStore } from "redux";
import formReducer from './Form-reduser'

const reducer = combineReducers({
formData:formReducer,
})

const store = createStore(reducer);

window.store = store

export default store;