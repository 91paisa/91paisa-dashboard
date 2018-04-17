import * as React from 'react'
import { List, WindowScroller } from 'react-virtualized'
import styled from 'styled-components'
import {
  fetchIVRLogsAPI,
  IIVRLogs,
  LOG_FETCH_LIMIT,
} from '../../../api/logs-api'
import { PaginationButton } from '../../../components/Buttons'
import Space, { SpaceEnum } from '../../../components/Space'
import { remToPx } from '../../../helpers/unit-helper'
import { lightGrey, white } from '../../../styles/colors'
import { isPhoneOrTable } from '../../../styles/screenSize'
import CustomerIVRLogItem from '../../CustomerDetail/log/CustomerIVRLogItem'
import IVRLogItem from './IVRLogItem'

interface IState {
  data: IIVRLogs[]
  last: boolean
  loading: boolean
  offset: number
}

interface IProps {
  forCustomerDetail?: boolean
  customerPhone: string | undefined
  handleCustomerPhoneToSearch?: (customerPhone: string) => void
}

class IVRLogsList extends React.Component<IProps, IState> {
  public state = {
    data: [],
    last: false,
    loading: false,
    offset: 0,
  }

  public componentWillReceiveProps(newProps: IProps) {
    if (
      !newProps.customerPhone ||
      (newProps.customerPhone && newProps.customerPhone.length === 10)
    ) {
      this.clearAndFetch()
    }
  }

  public componentDidMount() {
    this.getData()
  }

  public render() {
    const { data } = this.state
    return (
      <WindowScroller>
        {({ height, width, isScrolling, onChildScroll, scrollTop }) => (
          <List
            autoHeight={true}
            height={(data.length + 1) * this.getRowHeight()}
            autoWidth={true}
            isScrolling={isScrolling}
            onScroll={onChildScroll}
            rowCount={data.length + 1}
            rowHeight={this.getRowHeight()}
            rowRenderer={this.rowRenderer}
            width={width}
            scrollTop={scrollTop}
          />
        )}
      </WindowScroller>
    )
  }

  private getPreviousData = () => {
    const offset = Math.max(this.state.offset - 2 * LOG_FETCH_LIMIT, 0)
    this.setState({ offset, last: false }, () => this.getData())
  }

  private getNextData = () => {
    this.getData()
  }

  private getData = () => {
    if (this.state.loading || this.state.last) {
      return
    }
    this.setState({ loading: true }, () => {
      fetchIVRLogsAPI(this.state.offset, this.props.customerPhone).then(
        data => {
          this.setState({ data: [], last: true }, () => {
            this.setState(
              {
                data: data.length === 0 ? this.state.data : data,
                last: data.length === 0 || data.length < LOG_FETCH_LIMIT,
                loading: false,
                offset: this.state.offset + data.length,
              },
              () => this.forceUpdate(),
            )
          })
        },
      )
    })
  }

  private clearAndFetch = () => {
    this.setState({ offset: 0, last: false, loading: false, data: [] }, () =>
      this.getData(),
    )
  }

  private getRowHeight = () => (isPhoneOrTable() ? remToPx(4.5) : remToPx(3.5))

  private rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style,
  }: any) => {
    const { data, last, offset } = this.state
    if (index === data.length) {
      return (
        <PaginationContainer key={key} style={style}>
          <PaginationButton
            disabled={offset <= LOG_FETCH_LIMIT}
            onClick={() => this.getPreviousData()}
          >
            ⬅ Previous
          </PaginationButton>
          <Space width={SpaceEnum.l} />
          <PaginationButton disabled={last} onClick={() => this.getNextData()}>
            Next ➡
          </PaginationButton>
        </PaginationContainer>
      )
    }
    return (
      <BackgroundContainer key={key} style={style} index={index}>
        {this.props.forCustomerDetail ? (
          <CustomerIVRLogItem log={data[index]} />
        ) : (
          <IVRLogItem
            log={data[index]}
            customerPhoneToSearch={this.props.handleCustomerPhoneToSearch}
          />
        )}
      </BackgroundContainer>
    )
  }
}

const BackgroundContainer: any = styled.div`
  background: ${(props: any) => (props.index % 2 === 0 ? lightGrey : white)};
  border-bottom: ${lightGrey};
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default IVRLogsList
