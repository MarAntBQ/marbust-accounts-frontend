import React, { useState, useEffect, createContext } from 'react'
import Global from '../helpers/Global';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
      authUser();
    },[]);

    const authUser = async () => {
      // Get data from local storage
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      // Check if token exists and user
      if (!token || !user) {
        return false;
      }
      
      // Check if token is valid with the backend and get user data
      try {
        const response = await axios.get(`${Global.url}/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        // Set user data in the state
        setAuth(response.data);  
      }
      catch (error) {
        console.error('Error fetching user profile:', error.response.data.error);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    }

  return (<AuthContext.Provider
    value={{auth,setAuth
    }}
  >
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext;
