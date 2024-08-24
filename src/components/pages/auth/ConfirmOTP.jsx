import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const ConfirmOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInput = useRef(null);
  const otpInput = useRef(null);
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
    if (!otp) {
      otpInput.current.focus();
      setError('OTP is required');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post('https://v2.accounts.marbust.com/api/verify-otp', {
        email: email,
        otpCode: otp,
      });
      setError('OTP verified successfully!');
      setEmail('');
      setOtp('');
      setTimeout(() => {
        navigate('/login');
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
        <h1>Confirm OTP <i className="fa-solid fa-right-to-bracket"></i></h1>
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
            type='text'
            placeholder='OTP'
            value={otp}
            name='otp'
            onChange={(e) => setOtp(e.target.value)}
            disabled={loading}
            ref={otpInput}
          />
          <button className='btn--center' type='submit' disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Verify OTP'}
          </button>
          <div className='form__link'>
            <Link to='/login'>Login</Link> <strong>|</strong> <Link to='/register'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};