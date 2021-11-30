import React from 'react'
import FormInput from '../FormInput/FormInput'
import styles from './LoginForm.module.scss'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Авторизация</h3>
      <form className={styles.form}>
        <FormInput
          className={styles.input}
          type='email'
          placeholder='example@mail.com'
          icon='mail'
          required
        />
        <FormInput
          className={styles.input}
          type='password'
          placeholder='••••••••'
          icon='lock'
          required
        />
        <ButtonPrimary text='Войти' type='submit' />
      </form>
    </div>
  )
}

export default LoginForm
