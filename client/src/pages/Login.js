import React from 'react'
import styled from 'styled-components'
import { Form } from 'react-final-form'
import Core from '../Core/Core'
import { AuthConsumer } from '../modules/AuthContext'
import Input from '../ui/Input/Input'
import Button from '../ui/Button/Button'
import H from '../ui/H/H'
import { color } from '../css-variables'

const AuthPanel = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  padding: 5px 25px 25px 25px;
`

const Login = ({ history }) => {
  return (
    <AuthConsumer>
      {({ login }) => (
        <Form
          onSubmit={async values => {
            const response = await Core.users.login(values)
            console.log(response)

            if (response.status === 200) {
              login(response.data.data.token)
              history.push('/')
            }
          }}
          render={({ handleSubmit, pristine, invalid }) => (
            <AuthPanel>
              <form onSubmit={handleSubmit}>
                <H level={2}>Login</H>
                <Input
                  labelHidden
                  name="email"
                  label="E-Mail"
                  placeholder="E-Mail"
                />
                <Input
                  labelHidden
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                />

                <Button type="submit" primary fullWidth>
                  Login
                </Button>
              </form>
            </AuthPanel>
          )}
        />
      )}
    </AuthConsumer>
  )
}

export default Login
