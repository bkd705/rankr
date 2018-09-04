import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import { color } from '../../css-variables'

const StyledInput = styled.input`
  padding: 7.5px 10px;
  font-size: 0.75rem;
  border: 0;
  background: #f0f7fc;
  color: #2c2c2c;
  border-radius: 3px;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`

const InputLabel = styled.label`
  display: ${props => (props.hidden ? 'none' : 'block')}
  font-size: 0.75rem;
  color: #3c3c3c;
  margin: 5px 0;
`

const InputError = styled.span`
  color: red;
`

export default ({
  labelHidden = false,
  label,
  name,
  placeholder,
  type = 'text',
  ...rest
}) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <FormControl>
          <InputLabel hidden={labelHidden}>{label}</InputLabel>
          <StyledInput type={type} placeholder={placeholder} {...input} />
          {meta.touched && meta.error && <InputError>{meta.error}</InputError>}
        </FormControl>
      )}
    />
  )
}
