import * as React from 'react'
import styled from 'styled-components'
import { reviewerActionEnum } from '../../../../api/logs-api'
import { getFilters } from '../../../../helpers/reviewer-helper'
import { dark, white } from '../../../../styles/colors'
import { Container, Label } from './styles'

interface IProps {
  filter: (filter: reviewerActionEnum | string) => void
  updateFilter: reviewerActionEnum
}

class ReviewerLogFilter extends React.Component<IProps> {
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

export default ReviewerLogFilter
