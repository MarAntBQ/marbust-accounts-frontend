import React from 'react';

import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../../config/config';
import { useForm } from '../../../hooks/useForm';
import Global from '../../../helpers/Global';

export const Register = () => {
  const { form, changed } = useForm({})

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setLoading(true);
  //   if (!firstName) {
  //     firstNameInput.current.focus();
  //     setError('First name is required');
  //     setLoading(false);
  //     return;
  //   }
  //   if (!lastName) {
  //     lastNameInput.current.focus();
  //     setError('Last name is required');
  //     setLoading(false);
  //     return;
  //   }
  //   if (!email) {
  //     emailInput.current.focus();
  //     setError('Email is required');
  //     setLoading(false);
  //     return;
  //   }
  //   if (!phone) {
  //     phoneInput.current.focus();
  //     setError('Phone is required');
  //     setLoading(false);
  //     return;
  //   }
  //   if (!password) {
  //     passwordInput.current.focus();
  //     setError('Password is required');
  //     setLoading(false);
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(`${API.api}/register`, {
  //       firstName,
  //       lastName,
  //       email,
  //       phone,
  //       password,
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     setFirstName('');
  //     setLastName('');
  //     setEmail('');
  //     setPhone('');
  //     setPassword('');
  //     setError('User registered successfully');
  //     setTimeout(() => {
  //       navigate('/confirm-otp');
  //     }, 1000);
  //   } catch (error) {
  //     if (error.response && error.response.data && error.response.data.message) {
  //       setError(error.response.data.message);
  //     } else {
  //       setError('An unexpected error occurred.');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const createAccount = async(e) => {
    e.preventDefault();
    let newUser = form;
    const request = await fetch(`${Global.url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    const data = await request.json();

    console.log(data);
  }

  return (
    <div className='auth-layout__block auth-layout__block--login'>
      <div className="form__wrapper">
      <h1>Crear Cuenta <i className="fa-solid fa-right-to-bracket"></i></h1>
      {error && <p className='error'>{error}</p>}
      <form className='form form--auth' onSubmit={createAccount}>
          <input
            type='text'
            placeholder='Nombres'
            name="firstName"
            disabled={loading}
            ref={firstNameInput}
            required
            onChange={changed}
          />
          <input
            type='text'
            placeholder='Apellidos'
            name="lastName"
            disabled={loading}
            ref={lastNameInput}
            required
            onChange={changed}
          />
          <input
            type='email'
            placeholder='Email'
            name="email"
            disabled={loading}
            ref={emailInput}
            required
            onChange={changed}
          />
          <input
            type='text'
            placeholder='Teléfono'
            name='phone'
            disabled={loading}
            ref={phoneInput}
            required
            onChange={changed}
          />
          <input
            type='password'
            placeholder='Contraseña'
            name='password'
            disabled={loading}
            ref={passwordInput}
            required
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