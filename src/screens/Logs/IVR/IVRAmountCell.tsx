import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { IVRTransaction } from '../../../api/logs-api'
import HoverTooltip from '../../../components/HoverTooltip'
import { graphite } from '../../../styles/colors'
import AmountCell from '../../Transactions/AmountCell'
interface IProps extends RouteComponentProps<{}> {
  transaction: IVRTransaction
}
const IVRAmountCell: React.SFC<IProps> = ({ transaction, history }: IProps) => {
  if (transaction.id && transaction.amount) {
    return (
      <HoverTooltip
        tooltip={'transaction 🔗'}
        onClick={() => history.push(`/transactions/${transaction.id}/`)}
      >
        <AmountCell amount={transaction.amount} />
      </HoverTooltip>
    )
  }
  if (transaction.amount) {
    return (
      <AmountCell
        style={{ color: graphite, fontWeight: 500 }}
        amount={transaction.amount}
      />
    )
  }
  return <p />
}

export default withRouter(IVRAmountCell)
