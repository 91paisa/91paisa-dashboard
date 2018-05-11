import * as React from 'react'
import { ITransaction, nodalStatusEnum } from '../../../api/transaction-api'
import NodalStatus from './NodalStatus'
import RefundStatus from './RefundStatus'
import SettlementStatus from './SettlementStatus'

const NodalStatusContainer: React.SFC<ITransaction> = ({
  nodal,
  refund,
  settlement,
}: ITransaction) => (
  <>
    {nodal.status !== nodalStatusEnum.noop ? (
      <>
        <NodalStatus statusCode={nodal.status} />
        {refund && <RefundStatus {...refund} />}
        {settlement && (
          <>
            <SettlementStatus title={'eko'} settlement={settlement.eko} />
            <SettlementStatus title={'zms'} settlement={settlement.zms} />
          </>
        )}
      </>
    ) : null}
  </>
)
export default NodalStatusContainer
