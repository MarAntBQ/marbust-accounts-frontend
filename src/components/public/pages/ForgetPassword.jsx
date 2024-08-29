import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import Global from '../../../helpers/Global';

export const ForgetPassword = () => {
  const { form, changed } = useForm({})

  const [formMessage, setFormMessage] = useState({
    type: '',
    message: ''
  });

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInput = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newForgot = form;
    setFormMessage({});
    setLoading(true);
    if (!newForgot.email) {
      emailInput.current.focus();
      setFormMessage({ type: 'error', message: "Email es requerido" });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(`${Global.url}/request-password-reset`, newForgot, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setFormMessage({ type: 'success', message: response.data.message });
      emailInput.current.value = '';
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setFormMessage({ type: 'error', message: error.response.data.error });
      } else {
        setFormMessage({ type: 'error', message: 'Ocurrió un error inesperado.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-layout__block auth-layout__block--login'>
      <div className="form__wrapper">
      <h1>Forget Password <i className="fa-solid fa-right-to-bracket"></i></h1>
      {formMessage.message && (
          <p className={`form-message form-message--${formMessage.type}`}>
            {formMessage.message}
            </p>
          )}
      <form className='form form--auth' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            name="email"
            disabled={loading}
            ref={emailInput}
            onChange={changed}
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
