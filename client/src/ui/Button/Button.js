import styled from 'styled-components'
import { color, fontSize, spacing } from './../../css-variables'

export default styled.button `
    background: linear-gradient(90deg,${color.primary},${color.secondary});
    color: ${color.white};
    text-align: center;
    padding: ${spacing.xs} ${spacing.md};
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${fontSize.sm};

    &:hover {
      cursor: pointer;
    }
`