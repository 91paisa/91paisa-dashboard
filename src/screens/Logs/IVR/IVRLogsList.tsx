import * as React from 'react'
import { List, WindowScroller } from 'react-virtualized'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import { remToPx } from '../../../helpers/unit-helper'
import { lightGrey, white } from '../../../styles/colors'
import { isPhoneOrTable } from '../../../styles/screenSize'
import IVRLogItem from './IVRLogItem'

interface IProps {
  data: IIVRLogs[]
  ludicrousMode?: boolean
}

class IVRLogsList extends React.Component<IProps> {
  public render() {
    const { data } = this.props
    return (
      <Container>
        <WindowScroller>
          {({ height, width, isScrolling, onChildScroll, scrollTop }) => (
            <List
              autoHeight={true}
              height={height}
              autoWidth={true}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              rowCount={data.length}
              rowHeight={this.getRowHeight()}
              rowRenderer={this.rowRenderer}
              width={width}
              scrollTop={scrollTop}
            />
          )}
        </WindowScroller>
      </Container>
    )
  }

  private getRowHeight = () => (isPhoneOrTable() ? remToPx(4.5) : remToPx(3.5))

  private rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style,
  }: any) => (
    <BackgroundContainer key={key} style={style} index={index}>
      <IVRLogItem log={this.props.data[index]} />
    </BackgroundContainer>
  )
}

const Container = styled.div`
  height: 100%;
  overflow: no-display;
`

const BackgroundContainer: any = styled.div`
  background: ${(props: any) => (props.index % 2 === 0 ? lightGrey : white)};
  border-bottom: ${lightGrey};
`
export default IVRLogsList
