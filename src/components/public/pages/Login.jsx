import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import Global from '../../../helpers/Global';
import useAuth from '../../../hooks/useAuth';

export const Login = () => {

  const {setAuth} = useAuth();

  const { form, changed } = useForm({})

  const [formMessage, setFormMessage] = useState({
    type: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newLogin = form;
    setFormMessage({});
    setLoading(true);
    if (!newLogin.email) {
      emailInput.current.focus();
      setFormMessage({ type: 'error', message: "Email es requerido" });
      setLoading(false);
      return;
    }
    if (!newLogin.password) {
      passwordInput.current.focus();
      setFormMessage({ type: 'error', message: "Contraseña es requerida" });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(`${Global.url}/login`, newLogin, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setFormMessage({ type: 'success', message: response.data.message });
      emailInput.current.value = '';
      passwordInput.current.value = '';
      setTimeout(() => {
        // Set user data in the Local Storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        // Set user data in the state
        setAuth(response.data.user);
        setLoading(false);
        // Redirect to the dashboard
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.error) {
        setFormMessage({ type: 'error', message: error.response.data.error });
      } else {
        setFormMessage({ type: 'error', message: 'Ocurrió un error inesperado.' });
      }
    }
  };

  return (
    <div className='auth-layout__block'>
      <div className="form__wrapper">
      <h1>Iniciar Sesión <i className="fa-solid fa-right-to-bracket"></i></h1>
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
          <input
            type='password'
            placeholder='Contraseña'
            name='password'
            disabled={loading}
            ref={passwordInput}
            onChange={changed}
          />
          <button className='btn--center' type='submit' disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Ingresar'}
          </button>
          <div className='form__link'>
          <Link to='/forget-password'>Olvide mi Contraseña</Link> <strong>|</strong> <Link to='/register'>Crear Cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
