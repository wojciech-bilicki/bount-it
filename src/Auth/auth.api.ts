import axios, { AxiosRequestConfig } from 'axios';

interface Credentials {
  username: string;
  password: string;
}

interface LoginApiResponse {
  created: string;
  id: string;
  token: string;
  username: string;
}

const API_BASE_URL = 'http://165.22.88.139:4000'

interface LoginResponse  {
  error?: string
  token?: string;
}


export const onLogin = async (data: Credentials): Promise<LoginResponse | undefined> => {
  
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: API_BASE_URL + '/login',
    data
  }
  try {
    const {data:response} = await axios.request<LoginApiResponse>(requestConfig);
    storeToken(response.token);
    return {token: response.token};

  } catch (e) {
    console.error(e.response);
    return {error: e.response.data.message};
  } 
}

interface RegisterResponse {
  error: string;
}

export const onRegister = async (data: Credentials): Promise<RegisterResponse | undefined> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: API_BASE_URL + '/register',
    data
  }
  try {
    const {data: response} = await axios.request(requestConfig);
    
  } catch (e) {
    console.error(e.response);
    return {error: e.response.data.message};
  }
}

export const BOUNCE_IT_TOKEN_KEY = 'bounce_it_token_key'

const storeToken = (token: string) => {
  localStorage.setItem(BOUNCE_IT_TOKEN_KEY, token);
}