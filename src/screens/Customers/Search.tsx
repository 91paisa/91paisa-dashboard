import * as React from 'react'
import styled from 'styled-components'
import { dark, primary } from '../../styles/colors'
import { phone } from '../../styles/screenSize'

const Search = () => (
  <Container>
    <Input placeholder="Type name or phone number to search" />
  </Container>
)
export default Search

const Container = styled.div`
  margin: 1% auto;
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
  @media (${phone}) {
    width: 98%;
    margin: 1% auto;
    border: solid 1px ${primary};
  }
`
const Input = styled.input`
  color: ${dark};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  border: none;
  padding: 0 2rem;
  @media(${phone}){
  font-size: 0.8rem;
  padding: 0 0.4rem;
`
