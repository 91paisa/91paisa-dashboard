import styled from 'styled-components'
import { dark, graphite, white } from '../styles/colors'

const HoverTooltip: any = styled.div`
  color: ${dark};
  cursor: pointer;
  &:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    &:after {
      margin: auto 0.3rem;
      padding: 0 0.8rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      opacity: 0.9;
      background: ${graphite};
      box-shadow: 0 1px 1px rgba(0,0,0,0.2);
      color: ${white};
      z-index: 99999;
      content: '${(props: any) => props.tooltip}';
    }
  }
  height: 100%;
  align-items: center;
  display: flex;
`
export default HoverTooltip
