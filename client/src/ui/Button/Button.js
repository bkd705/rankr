import styled from 'styled-components'
import { color, fontSize, spacing, input } from './../../css-variables'

export default styled.button`
  background: linear-gradient(90deg, ${color.primary}, ${color.secondary});
  color: ${color.white};
  text-align: center;
  padding: 0 ${spacing.md};
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${fontSize.sm};
  height: ${input.height};
  line-height: ${input.height};
  box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.15);
  transition: all 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 5px 16px rgba(0, 0, 0, 0.25);
    transform: translate(-1px, -1px);
  }
`
