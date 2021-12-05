import React, { useState } from 'react';

import styles from './RegisterForm.module.scss';
import FormInput from '../FormInput/FormInput';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useActions } from '../../hooks/useActions';
import FormInputGroup from '../FormInputGroup/FormInputGroup';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
  });
  const [pass, setPass] = useState({
    password: '',
    repeatPassword: '',
  });
  const [email, setEmail] = useState('');

  const { register } = useActions();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    register({
      email,
      password: pass.password,
      firstName: name.firstName,
      lastName: name.lastName,
      patronymic: name.patronymic,
    });
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Регистрация</h3>
      <form className={styles.form} onSubmit={submitHandler}>
        <FormInputGroup
          count={3}
          className={styles.input}
          type="text"
          names={['firstName', 'lastName', 'patronymic']}
          placeholders={['Фамилия', 'Имя', 'Отчество']}
          values={[name.firstName, name.lastName, name.patronymic]}
          icon="person"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName({
              ...name,
              [e.target.name]: e.target.value,
            })
          }
        />
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
        <FormInputGroup
          count={2}
          names={['password', 'repeatPassword']}
          className={styles.input}
          type="password"
          placeholders={['••••••••', '••••••••']}
          icon="lock"
          required
          values={[pass.password, pass.repeatPassword]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPass({
              ...pass,
              [e.target.name]: e.target.value,
            })
          }
        />
        <ButtonPrimary type="submit">Создать</ButtonPrimary>
      </form>
    </div>
  );
};

export default RegisterForm;
