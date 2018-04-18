import * as React from 'react'
import { List, WindowScroller } from 'react-virtualized'
import styled from 'styled-components'
import { IIVRLog, LOG_FETCH_LIMIT } from '../../../api/logs-api'
import {
  PaginationButtonNext,
  PaginationButtonPrevious,
} from '../../../components/Buttons'
import { fog, lightGrey, white } from '../../../styles/colors'

interface IState {
  data: IIVRLog[]
  last: boolean
  loading: boolean
  offset: number
}

interface IProps {
  searchFilter: string // for api to access
  children: (log: IIVRLog) => void // for render props
  updateSearchFilter?: (search: string) => void
  api: (offset: number, filter?: string) => Promise<IIVRLog[]> //  api function
  rowHeight: number
}

class LogsList extends React.Component<IProps, IState> {
  public state = {
    data: [],
    last: false,
    loading: false,
    offset: 0,
  }

  public componentWillReceiveProps(newProps: IProps) {
    if (this.props.searchFilter !== newProps.searchFilter) {
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
            height={(data.length + 1) * this.props.rowHeight}
            autoWidth={true}
            isScrolling={isScrolling}
            onScroll={onChildScroll}
            rowCount={data.length + 1}
            rowHeight={this.props.rowHeight}
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
      this.props.api(this.state.offset, this.props.searchFilter).then(data => {
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

  private clearAndFetch = () => {
    this.setState({ offset: 0, last: false, loading: false, data: [] }, () =>
      this.getData(),
    )
  }

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
          <PaginationButtonPrevious
            disabled={offset <= LOG_FETCH_LIMIT}
            onClick={() => this.getPreviousData()}
          />
          <PaginationButtonNext
            disabled={last}
            onClick={() => this.getNextData()}
          />
        </PaginationContainer>
      )
    }
    return (
      <BackgroundContainer key={key} style={style} index={index}>
        {this.props.children(data[index])}
      </BackgroundContainer>
    )
  }
}

const BackgroundContainer: any = styled.div`
  background: ${(props: any) => (props.index % 2 === 0 ? lightGrey : white)};
  border-bottom: ${lightGrey};
  color: ${fog};
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export default LogsList
