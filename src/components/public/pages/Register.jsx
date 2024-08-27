import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import Global from '../../../helpers/Global';

export const Register = () => {
  const { form, changed } = useForm({})

  const [formMessage, setFormMessage] = useState({
    type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  const createAccount = async(e) => {
    e.preventDefault();
    let newUser = form;

    setFormMessage({});
    setLoading(true);
    if (!newUser.firstName) {
      firstNameInput.current.focus();
      setFormMessage({ type: 'error', message: "Nombre es requerido" });
      setLoading(false);
      return;
    }
    if (!newUser.lastName) {
      lastNameInput.current.focus();
      setFormMessage({ type: 'error', message: "Apellido es requerido" });
      setLoading(false);
      return;
    }
    if (!newUser.email) {
      emailInput.current.focus();
      setFormMessage({ type: 'error', message: "Email es requerido" });
      setLoading(false);
      return;
    }
    if (!newUser.phone) {
      phoneInput.current.focus();
      setFormMessage({ type: 'error', message: "Teléfono es requerido" });
      setLoading(false);
      return;
    }
    if (!newUser.password) {
      passwordInput.current.focus();
      setFormMessage({ type: 'error', message: "Contraseña es requerida" });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${Global.url}/register`, newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      firstNameInput.current.value='';
      lastNameInput.current.value='';
      emailInput.current.value='';
      phoneInput.current.value='';
      passwordInput.current.value='';
      setFormMessage({ type: 'success', message: response.data.message });
      setTimeout(() => {
        navigate('/confirm-otp');
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
  }

  return (
    <div className='auth-layout__block auth-layout__block--login'>
      <div className="form__wrapper">
      <h1>Crear Cuenta <i className="fa-solid fa-right-to-bracket"></i></h1>
      {formMessage.message && (
        <p className={`form-message form-message--${formMessage.type}`}>
          {formMessage.message}
        </p>
      )}
      <form className='form form--auth' onSubmit={createAccount}>
          <input
            type='text'
            placeholder='Nombres'
            name="firstName"
            disabled={loading}
            ref={firstNameInput}
            onChange={changed}
          />
          <input
            type='text'
            placeholder='Apellidos'
            name="lastName"
            disabled={loading}
            ref={lastNameInput}
            onChange={changed}
          />
          <input
            type='email'
            placeholder='Email'
            name="email"
            disabled={loading}
            ref={emailInput}
            onChange={changed}
          />
          <input
            type='text'
            placeholder='Teléfono'
            name='phone'
            disabled={loading}
            ref={phoneInput}
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
            {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Registrarse'}
          </button>
          <div className='form__link'>
            <Link to='/login'>Iniciar Sesión</Link> <strong>|</strong> <Link to='/forget-password'>Olvidé mi Contraseña</Link>
          </div>
        </form>
      </div>
    </div>
  )
}