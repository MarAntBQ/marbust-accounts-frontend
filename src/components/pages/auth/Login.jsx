import React from 'react'

export const Login = () => {
  return (
    <div className='auth-layout__block auth-layout__block--login'>
      <div className="form__wrapper">
      <h1>Sign In <i class="fa-solid fa-right-to-bracket"></i></h1>
      <form className='form form--auth'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button className='btn--center'>Login</button>
        <div className='form__link'>
        <a href='#'>Forgot password?</a> <strong>|</strong> <a href='#'>Create Account</a>
        </div>
      </form>
      </div>
    </div>
  )
}
