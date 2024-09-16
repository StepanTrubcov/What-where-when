import { connect } from "react-redux";
import ShowImg from './ShowImg'

const mapStateToProps =(state)=> ({
    formDataImg:state.formDataImg
})

export default connect(mapStateToProps)(ShowImg)