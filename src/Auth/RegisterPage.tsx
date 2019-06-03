import React, { useState } from 'react';
import { Link } from 'react-navi';
import { onRegister } from './auth.api';
import { AuthForm, ErrorParagraph, FooterParagraph, FormButton, Input } from './Auth.components';
import AuthFormWrapper from './AuthFormWrapper';


const RegisterPage: React.FC = () => {

  const [{username, password, repeatPassword}, setCredentials] = useState({
    username: '',
    password: '',
    repeatPassword: ''
  })

  
  const [error, setError] = useState('');

  const register = async (event: React.FormEvent) => {
    event.preventDefault()
    if(password !== repeatPassword) {
      setError(`Passwords don't match`)
    }
    const response = await onRegister({username, password});

    if(response && response.error) {
      setError(response.error);
    }
  }



  return (
    <AuthFormWrapper footer={
      <FooterParagraph>{`Already registered? `}
      <Link href="/login">Back to login</Link>
      </FooterParagraph>
    }>
      <AuthForm onSubmit={register}>

        <Input value={username} onChange={(event) => {
          setCredentials({
            repeatPassword,
            password,
            username: event.target.value
          })
        }} placeholder="Username" />
        <Input value={password} onChange={(event) => {
          setCredentials({
            repeatPassword,
            password: event.target.value,
            username

          })
        }} placeholder="Password" />

<Input value={repeatPassword} onChange={(event) => {
          setCredentials({
            password,
            repeatPassword: event.target.value,
            username

          })
        }} placeholder="Repeat password" />
          {error && <ErrorParagraph>{error}<i className="material-icons">error</i></ErrorParagraph>}
        <FormButton type="submit">Register</FormButton>
      </AuthForm>
      </AuthFormWrapper>
  )
}

export default RegisterPage;