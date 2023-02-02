import { useState } from 'react';
import Cookies from 'js-cookie';

export default function useToken() {
  const getToken = async () => {
    return Cookies.get('login');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = async (userToken) => {
    Cookies.set('login', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}