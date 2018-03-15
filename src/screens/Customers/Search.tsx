import * as React from 'react'
import styled from 'styled-components'
import { dark } from '../../styles/colors'

const Search = () => (
  <Container>
    <Input placeholder="Type name or phone number to search"/>
  </Container>
)
export default Search

const Container = styled.div`
  margin: 1rem auto;
  display: flex;
  width: 70%;
  height: 3rem;
  border-radius: 4px;
  box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.2);
  //box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition-duration: 300ms;
  &:hover {
    //box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  }
`
const Input = styled.input`
  color: ${dark};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  outline: none;
  font-size: 1.2rem;
  border: none;
  padding: 0 2rem;
  //background: url('../../../public/images/search.svg') no-repeat right;
`
