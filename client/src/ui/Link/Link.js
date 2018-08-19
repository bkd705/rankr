import styled from 'styled-components'
import { color, fontSize } from './../../css-variables'

export default styled.a `
    color: ${color.primary};
    font-weight: 500;
    font-size: ${fontSize.sm};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
`