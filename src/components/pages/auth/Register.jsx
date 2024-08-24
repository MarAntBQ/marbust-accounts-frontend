import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../../config/config';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!firstName) {
      firstNameInput.current.focus();
      setError('First name is required');
      setLoading(false);
      return;
    }
    if (!lastName) {
      lastNameInput.current.focus();
      setError('Last name is required');
      setLoading(false);
      return;
    }
    if (!email) {
      emailInput.current.focus();
      setError('Email is required');
      setLoading(false);
      return;
    }
    if (!phone) {
      phoneInput.current.focus();
      setError('Phone is required');
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
      const response = await axios.post(`${API.api}/register`, {
        firstName,
        lastName,
        email,
        phone,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setError('User registered successfully');
      setTimeout(() => {
        navigate('/confirm-otp');
      }, 1000);
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
      <h1>Register <i className="fa-solid fa-right-to-bracket"></i></h1>
      {error && <p className='error'>{error}</p>}
      <form className='form form--auth' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            disabled={loading}
            ref={firstNameInput}
          />
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            disabled={loading}
            ref={lastNameInput}
          />
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
            type='text'
            placeholder='Phone'
            value={phone}
            name='phone'
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
            ref={phoneInput}
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
            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Register'}
          </button>
          <div className='form__link'>
            <Link to='/login'>Login</Link> <strong>|</strong> <Link to='/forget-password'>Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}