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
import IVRLogItem from './IVRLogItem'

interface IState {
  data: IIVRLogs[]
  last: boolean
  loading: boolean
  offset: number
}

class IVRLogsList extends React.Component<{}, IState> {
  public state = {
    data: [],
    last: false,
    loading: false,
    offset: 0,
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
    // tslint:disable-next-line
    console.log('new offset', offset)
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
      fetchIVRLogsAPI(this.state.offset).then(data => {
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
      })
    })
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
        <IVRLogItem log={data[index]} />
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
