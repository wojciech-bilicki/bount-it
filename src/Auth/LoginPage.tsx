import React, { useState } from 'react';
import { Link, useNavigation } from 'react-navi';
import { onLogin } from './auth.api';
import { AuthForm, ErrorParagraph, FooterParagraph, ForgotPassword, FormButton, Input } from './Auth.components';
import AuthFormWrapper from './AuthFormWrapper';


const App: React.FC = () => {
  let navigation = useNavigation();

  const [{ username, password }, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState('');

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      username,
      password
    })

    if (response && response.error) {
      setError(response.error);
    } else {
      navigation.setContext({token:  response!.token})
      navigation.navigate('/')
    }

  }
  return (
    <AuthFormWrapper footer={ <FooterParagraph>{`Need an account? `}
    <Link href="/register">Register now</Link>
    </FooterParagraph>
    }>
      <AuthForm autoComplete="asdas" onSubmit={login}>
        <Input name="sadat" autoComplete="loasdagin"  placeholder="Username" value={username} onChange={(event) => setCredentials({
          username: event.target.value,
          password
        })} />
        <Input name="asdassd" autoComplete="user-asdsda"  placeholder="Password" value={password} onChange={(event) => {
          setCredentials({
            username,
            password: event.target.value
          })
        }}/>
          {error && <ErrorParagraph>Incorrect username/password<i className="material-icons">error</i></ErrorParagraph>}
        <FormButton type="submit">Login</FormButton>       
        <ForgotPassword>Forgot your password?</ForgotPassword>

      </ AuthForm>
      </AuthFormWrapper>
    
  );
}

export default App;
