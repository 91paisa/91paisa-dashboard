import * as React from 'react'
import BalanceItem from './BalanceItem'
import { SidebarTitle } from './index'
interface IProps {
  nodal: number
  eko: number
}
const Balance: React.SFC<IProps> = (props: IProps) => (
  <div>
    <SidebarTitle>Balances</SidebarTitle>
    <BalanceItem amount={props.nodal} label="Nodal" />
    <BalanceItem amount={props.eko} label="Eko/-" />
  </div>
)

export default Balance
