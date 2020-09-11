import {connect} from "react-redux";
import {login} from "../../store/user/action";
import {Personal} from "./Personal";

export default connect(
  () => ({}),
  {login}
)(Personal)
