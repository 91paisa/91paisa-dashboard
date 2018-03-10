import * as React from 'react'
import { IBalance } from '../../api/balances-api'
import BalanceItem from './BalanceItem'
import { SidebarTitle } from './index'
interface IProps {
  nodal: IBalance
  eko: IBalance
}
const Balance: React.SFC<IProps> = (props: IProps) => (
  <div>
    <SidebarTitle>Balances</SidebarTitle>
    <BalanceItem {...props.nodal} label="Nodal" />
    <BalanceItem {...props.eko} label="Eko/-" />
  </div>
)

export default Balance
