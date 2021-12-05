import React, { useState } from 'react';

import styles from './LoginForm.module.scss';
import FormInput from '../FormInput/FormInput';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useActions } from '../../hooks/useActions';
import { IUser } from '../../models/IUser';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IAuthError } from '../../models/IAuthError';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useTypedSelector((state) => state.auth);

  const { login } = useActions();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email, password } as IUser);
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
        {(error as IAuthError).email && (
          <span className={styles.error}>{(error as IAuthError).email[0]}</span>
        )}
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
        {(error as IAuthError).password && (
          <span className={styles.error}>
            {(error as IAuthError).password[0]}
          </span>
        )}
        <ButtonPrimary type="submit">Войти</ButtonPrimary>
      </form>
    </div>
  );
};

export default LoginForm;
