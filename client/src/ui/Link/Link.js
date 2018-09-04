import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color, fontSize } from './../../css-variables'

export default styled(Link)`
  color: ${color.primary};
  font-weight: 500;
  font-size: ${fontSize.sm};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
