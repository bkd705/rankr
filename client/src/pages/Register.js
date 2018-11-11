import React from 'react'
import { Form } from 'react-final-form'
import Core from '../Core/Core'
import { AuthConsumer } from '../modules/AuthContext'
import Input from '../ui/Input/Input'
import Button from '../ui/Button/Button'
import H from '../ui/H/H'
import Link from '../ui/Link/Link'
import AuthPanel from '../components/AuthPanel'
import { spacing } from '../css-variables'

const Register = ({ history }) => {
  return (
    <AuthConsumer>
      {({ login }) => (
        <Form
          onSubmit={async values => {
            const response = await Core.users.register(values)

            if (response.status === 200) {
              login(response.data.data.token)
              history.push('/')
            }
          }}
          render={({ handleSubmit, pristine, invalid }) => (
            <AuthPanel>
              <form onSubmit={handleSubmit}>
                <H level={2}>Register</H>
                <Input
                  labelHidden
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
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

                <Button type="submit" primary fullWidth mb={spacing.sm}>
                  Register
                </Button>
                <Link to="/login">Go Back</Link>
              </form>
            </AuthPanel>
          )}
        />
      )}
    </AuthConsumer>
  )
}

export default Register
