import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBeneficiaryAction } from '../../../actions/customer-actions'
import { IBeneficiary } from '../../../api/customer-api'
import { IReduxState } from '../../../store/initial-state'
import BeneficiariesList from './BeneficiariesList'

interface IProps {
  customerPhone: string
  customerIndex: number
  getBeneficiaryAction: (customerPhone: string) => void
  beneficiaries: IBeneficiary[]
}

class BeneficiariesListContainer extends Component<IProps> {
  public componentDidMount() {
    this.props.getBeneficiaryAction(this.props.customerPhone)
  }

  public componentWillUpdate(newProps: IProps) {
    if (newProps.customerPhone !== this.props.customerPhone) {
      this.props.getBeneficiaryAction(newProps.customerPhone)
    }
  }

  public render() {
    return <BeneficiariesList beneficiaries={this.props.beneficiaries} />
  }
}

const mapStateToProps = (state: IReduxState, props: any) => {
  return {
    beneficiaries: state.customers[props.customerIndex].beneficiaries,
    customerPhone: props.customerPhone,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ getBeneficiaryAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(
  BeneficiariesListContainer as any,
)
