import * as React from 'react'
import styled from 'styled-components'
import { reviewerActionEnum } from '../../../api/logs-api'
import { getFilters } from '../../../helpers/reviewer-helper'
import { dark, fog, white } from '../../../styles/colors'

interface IProps {
  filter: (filter: reviewerActionEnum) => void
  updateFilter: reviewerActionEnum
}

class FilterReviewerLogs extends React.Component<IProps> {
  public state = {
    filter: reviewerActionEnum.all,
  }

  public componentWillReceiveProps(newProps: IProps) {
    if (newProps.updateFilter !== this.state.filter) {
      this.setState({ filter: newProps.updateFilter })
    }
  }

  public render() {
    return (
      <Container>
        <Label>Filter</Label>
        <Select value={this.state.filter} onChange={this.change}>
          {getFilters().map(filter => (
            <Option key={filter.key} value={filter.value}>
              {filter.key}
            </Option>
          ))}
        </Select>
      </Container>
    )
  }
  private change = (e: any) => {
    const filter = e.target.value
    this.setState({ filter }, () => {
      this.props.filter(filter)
    })
  }
}

const Option = styled.option``

const Label = styled.div`
  line-height: 2rem;
  border-right: 1px solid ${fog};
  padding: 0 0.5rem;
`
const Select = styled.select`
  &:focus {
    outline: none;
  }
  align-items: center;
  justify-items: center;
  border: none;
  height: 2rem;
  line-height: 2rem;
  font-family: monospace;
  font-size: 1rem;
  border-radius: 0;
  background: ${white};
  color: ${dark};
`

const Container = styled.div`
  display: flex;
  border: 1px solid ${fog}
  align-items: center;
  border-radius: 0.5rem;
`

export default FilterReviewerLogs
