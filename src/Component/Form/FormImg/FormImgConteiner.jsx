import { connect } from "react-redux";
import FormImg from './FormImg'

const mapStateToProps = (state) => ({
    formData: state.formDataImg
})

export default connect(mapStateToProps)(FormImg)