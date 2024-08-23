import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!email) {
      emailInput.current.focus();
      setError('Email is required');
      setLoading(false);
      return;
    }
    if (!password) {
      passwordInput.current.focus();
      setError('Password is required');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post('https://v2.accounts.marbust.com/api/login', new URLSearchParams({
        email: email,
        password: password,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setToken(response.data.token);
      setError('¡Welcome back!');
      setEmail('');
      setPassword('');
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-layout__block auth-layout__block--login'>
      <div className="form__wrapper">
      <h1>Sign In <i className="fa-solid fa-right-to-bracket"></i></h1>
      {error && <p className='error'>{error}</p>}
      <form className='form form--auth' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            ref={emailInput}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            ref={passwordInput}
          />
          <button className='btn--center' type='submit' disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Login'}
          </button>
          <div className='form__link'>
            <a href='/forget-password'>Forgot password?</a> <strong>|</strong> <a href='/register'>Create Account</a>
          </div>
        </form>
      </div>
    </div>
  )
}
