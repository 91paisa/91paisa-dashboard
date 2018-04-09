import { Table } from 'react-virtualized'
import styled from 'styled-components'
import { lightGrey, primary, white } from './colors'

export const TableContainer = styled(Table as any)`
  outline: none;
  background: white;
`

export const headerRow = {
  background: primary,
  color: white,
  letterSpacing: '2px',
}

export const oddRow = {
  background: `${white}`,
}

export const evenRow = {
  background: `${lightGrey}`,
}
