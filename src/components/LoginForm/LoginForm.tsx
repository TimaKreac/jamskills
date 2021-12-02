import React, { useState } from 'react';

import styles from './LoginForm.module.scss';
import FormInput from '../FormInput/FormInput';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useActions } from '../../hooks/useActions';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useActions();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Авторизация</h3>
      <form className={styles.form} onSubmit={submitHandler}>
        <FormInput
          className={styles.input}
          type="email"
          placeholder="example@mail.com"
          icon="mail"
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <FormInput
          className={styles.input}
          type="password"
          placeholder="••••••••"
          icon="lock"
          required
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <ButtonPrimary type="submit">Войти</ButtonPrimary>
      </form>
    </div>
  );
};

export default LoginForm;
