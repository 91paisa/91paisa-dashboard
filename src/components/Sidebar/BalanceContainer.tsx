import { connect } from 'react-redux'
import { IReduxState } from '../../store/initial-state'
import Balance from './Balance'

const mapStateToProps = (state: IReduxState) => ({
  ...state.balances,
})

export default connect(mapStateToProps)(Balance)
