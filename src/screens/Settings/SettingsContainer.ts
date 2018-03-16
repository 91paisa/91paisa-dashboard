import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IAuthActions, logout } from '../../actions/auth-actions'
import Settings from './Settings'

const mapDispatchToProps = (dispatch: Dispatch<IAuthActions>) =>
  bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(Settings)
