'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';

import classes from './auth-form.module.scss';
import { User } from '@/src/types/auth';
import { authenticate } from '@/src/auth/actions';

const initialState: User = {
  email: '',
  password: '',
  success: null,
};

const createUser = async function (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  });
  const data = await response.json();

  if (!response.ok) {
    console.log('Error creating user');
  }
  return data;
};

export default function AuthForm() {
  const submitHandler = async function (prevState: User, formData: FormData) {
    let user = null;
    if (isLogin) {
      try {
        const result = await authenticate(prevState, formData);
        console.log(`Login result: ${result}`);
      } catch (error) {
        console.log(`Sign in error: ${error}}`);
      }
    } else {
      const email: FormDataEntryValue | null = formData.get('email');
      const password: FormDataEntryValue | null = formData.get('password');
      try {
        user = await createUser(email, password);
      } catch (error) {
        console.log(`Sign up error: ${error}`);
      }
    }
    return user;
  };
  const [state, formAction] = useFormState(submitHandler, initialState);

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form action={formAction}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}
