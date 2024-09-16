import { connect } from "react-redux";
import FormImg from './FormImg'
import {addquestionImg} from '../../../redux/FormImg-reduser'

const mapStateToProps = (state) => ({
    formData: state.formData
})

export default connect(mapStateToProps, {addquestionImg })(FormImg)