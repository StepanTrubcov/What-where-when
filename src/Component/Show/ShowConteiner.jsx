import React from "react";
import { connect } from "react-redux";
import Show from './Show'

const mapStateToProps =(state)=> ({
    formData:state.formData
})

export default connect(mapStateToProps)(Show)