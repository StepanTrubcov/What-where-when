import { connect } from "react-redux";
import FormText from './Form'
import { addquestionText } from '../../../redux/Form-reduser'

const mapStateToProps = (state) => ({
    formData: state.formData
})

const FormConteiner = () =>{
    return <FormText/>
}

export default connect(mapStateToProps, { addquestionText })(FormConteiner)