import React from "react";
import { connect } from "react-redux";
import Form from './Form'
import {addquestion} from '../../redux/Form-reduser'

const mapStateToProps =(state)=>({
    formData:state.formData
})

export default connect(mapStateToProps,{addquestion})(Form)