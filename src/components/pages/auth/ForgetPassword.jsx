import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../../config/config';

export const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInput = useRef(null);
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
    try {
      const response = await axios.post(`${API.api}/request-password-reset`, new URLSearchParams({
        email: email,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.data && response.data.message) {
        setError(response.data.message); // Mensaje de éxito
      }
      setEmail('');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-layout__block auth-layout__block--login'>
      <div className="form__wrapper">
      <h1>Forget Password <i className="fa-solid fa-right-to-bracket"></i></h1>
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
          <button className='btn--center' type='submit' disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Reset Password'}
          </button>
          <div className='form__link'>
            <Link to='/login'>Login</Link> <strong>|</strong> <Link to='/register'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
