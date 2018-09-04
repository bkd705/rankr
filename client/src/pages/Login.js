import React from 'react'
import { Form, Field } from 'react-final-form'
import Core from '../Core/Core'
import { AuthConsumer } from '../modules/AuthContext'

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
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <label>E-Mail</label>
              <Field name="email" component="input" placeholder="E-Mail" />

              <label>Password</label>
              <Field
                name="password"
                render={({ input }) => (
                  <input type="password" {...input} placeholder="Password" />
                )}
              />

              <button type="submit">Login</button>
            </form>
          )}
        />
      )}
    </AuthConsumer>
  )
}

export default Login
