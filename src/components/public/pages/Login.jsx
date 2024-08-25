import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../../config/config';

export const Login = ({ setToken, token }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

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
      const response = await axios.post(`${API.api}/login`, new URLSearchParams({
        email: email,
        password: password,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.data && response.data.token) {
        setError('Login successfully!');
        setTimeout(() => {
          localStorage.setItem('loginToken', response.data.token);
          //setToken(response.data.token);
          navigate('/dashboard');
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
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
          <Link to='/forget-password'>Forgot password?</Link> <strong>|</strong> <Link to='/register'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
