import { Table } from 'react-virtualized'
import styled from 'styled-components'
import { lightGrey, white } from './colors'
export const TableContainer = styled(Table as any)`
  outline: none;
  background: white;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.1);
`

export const headerRow = {
  boxShadow: '0 1px 2px hsla(0, 0%, 0%, 0.1)',
}

export const oddRow = {
  background: `${white}`,
}

export const evenRow = {
  background: `${lightGrey}`,
}
