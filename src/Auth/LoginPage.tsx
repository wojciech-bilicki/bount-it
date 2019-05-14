import React, { useState } from 'react';
import { Link, useNavigation } from 'react-navi';
import { onLogin } from './auth.api';
import { AuthForm } from './Auth.components';

const App: React.FC = () => {
  let navigation = useNavigation();

  const [{username, password}, setCredentials] = useState({
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

    if(response && response.error) {
      setError(response.error);
    } else {
      navigation.navigate('/')
    }

  }
  return (
    <div className="App">
      <AuthForm onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input placeholder="Username" value={username} onChange={(event) => setCredentials({
          username: event.target.value,
          password
        })}/>
        <label htmlFor="password">Password</label>
        <input placeholder="Password" value={password} onChange={(event) => {
          setCredentials({
            username,
            password: event.target.value
          })
        }}></input>
        <button type="submit">Login</button>
        {error && <p>Invalid username/password</p>}
      </AuthForm>
      <Link href="register">Go to register</Link>
    </div>
  );
}

export default App;
