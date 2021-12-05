import React from 'react';
import { useNavigate } from 'react-router';
import ButtonOutline from '../ButtonOutline/ButtonOutline';

import styles from './GreetingSidebar.module.scss';

interface GreetingSidebarProps {
  type: 'login' | 'register';
}

const GreetingSidebar: React.FC<GreetingSidebarProps> = ({ type }) => {
  const navigate = useNavigate();

  return (
    <>
      {type === 'login' && (
        <div className={styles.root}>
          <img src="/logo_outline.svg" alt="logo" />
          <h3>Добро пожаловать!</h3>
          <p>
            <b>Jamskills</b> - это сервис для автоматизации оценки сотрудников и
            кандидатов!
          </p>
          <p>Если Вы еще не зарегистрированны, создайте свой кабинет</p>
          <ButtonOutline onClick={() => navigate('/register')}>
            Создать
          </ButtonOutline>
        </div>
      )}
      {type === 'register' && (
        <div className={styles.root}>
          <img src="/logo_outline.svg" alt="logo" />
          <h3>Добро пожаловать!</h3>
          <p>
            <b>Jamskills</b> - это сервис для автоматизации оценки сотрудников и
            кандидатов!
          </p>
          <p>Если Вы уже зарегистрированны, войдите в свой кабинет</p>
          <ButtonOutline onClick={() => navigate('/login')}>
            Войти
          </ButtonOutline>
        </div>
      )}
    </>
  );
};

export default GreetingSidebar;
