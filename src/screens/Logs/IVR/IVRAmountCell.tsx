import * as React from 'react'
import { Link } from 'react-router-dom'
import { IVRTransaction } from '../../../api/logs-api'
import HoverTooltip from '../../../components/HoverTooltip'
import { graphite } from '../../../styles/colors'
import AmountCell from '../../Transactions/AmountCell'

const IVRAmountCell: React.SFC<IVRTransaction> = ({
  amount,
  id,
}: IVRTransaction) => {
  if (id && amount) {
    return (
      <HoverTooltip tooltip={'transaction 🔗'}>
        <Link to={`/transactions/${id}/`}>
          <AmountCell amount={amount} />
        </Link>
      </HoverTooltip>
    )
  }
  if (amount) {
    return (
      <AmountCell
        style={{ color: graphite, fontWeight: 500 }}
        amount={amount}
      />
    )
  }
  return <p />
}

export default IVRAmountCell
