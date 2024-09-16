import { connect } from "react-redux";
import FormText from './Form'
import { addquestionText } from '../../../redux/Form-reduser'

const mapStateToProps = (state) => ({
    formData: state.formData
})

export default connect(mapStateToProps, { addquestionText })(FormText)