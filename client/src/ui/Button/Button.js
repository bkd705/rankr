import styled from 'styled-components'
import { color, fontSize, spacing, input } from './../../css-variables'

export default styled.button `
    background: linear-gradient(90deg,${color.primary},${color.secondary});
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

    &:hover {
      cursor: pointer;
    }
`