import { connect } from "react-redux";
import FormText from './Form'

const mapStateToProps = (state) => ({
    formData: state.formData
})

export default connect(mapStateToProps)(FormText)