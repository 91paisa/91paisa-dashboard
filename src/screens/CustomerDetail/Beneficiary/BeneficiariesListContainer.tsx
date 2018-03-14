import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBeneficiaryAction } from '../../../actions/customer-actions'
import { IReduxState } from '../../../store/initial-state'
import BeneficiariesList from './BeneficiariesList'
//
// interface IReduxProps {
//   getBeneficiaryAction: any
//   beneficiaries: IBeneficiary[] | undefined
// }

interface IOwnProps {
  customerPhone: string
  customerIndex: number
}
class BeneficiariesListContainer extends Component<IOwnProps | any> {
  public componentDidMount() {
    this.props.getBeneficiaryAction(this.props.customerPhone)
  }
  public render() {
    return <BeneficiariesList beneficiaries={this.props.beneficiaries} />
  }
}

const mapStateToProps = (state: IReduxState, props: IOwnProps) => {
  return {
    beneficiaries: state.customers[props.customerIndex].beneficiaries,
    customerPhone: props.customerPhone,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ getBeneficiaryAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(
  BeneficiariesListContainer,
)
