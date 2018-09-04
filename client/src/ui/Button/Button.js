import React from 'react'
import styled from 'styled-components'
import { color, fontSize, spacing, input } from './../../css-variables'

const SpecialButton = styled.button`
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

const NormalButton = styled.button`
  background: ${props => (props.primary ? color.primary : color.secondary)};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  color: ${color.white};
  padding: 10px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;

  &:hover {
    cursor: pointer;
  }
`

export default ({ special, ...rest }) => {
  if (special) {
    return <SpecialButton {...rest} />
  }

  return <NormalButton {...rest} />
}
