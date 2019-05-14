import React, { useState } from 'react';
import { Link } from 'react-navi';
import { onRegister } from './auth.api';
import { AuthForm } from './Auth.components';


const RegisterPage: React.FC = () => {

  const [{username, password}, setCredentials] = useState({
    username: '',
    password: ''
  })

  const register = (event: React.FormEvent) => {
    event.preventDefault()
    onRegister({username, password});
  }

  return (
    <div>
      <AuthForm onSubmit={register}>
        <label>Username</label>
        <input value={username} onChange={(event) => {
          setCredentials({
            password,
            username: event.target.value
          })
        }} placeholder="Username" />
        <label>Password</label>
        <input value={password} onChange={(event) => {
          setCredentials({
            password: event.target.value,
            username

          })
        }} placeholder="Password" />
        <button type="submit">Register</button>
      </AuthForm>
      <Link href="/login">Back to login</Link>
    </div>
  )
}

export default RegisterPage;