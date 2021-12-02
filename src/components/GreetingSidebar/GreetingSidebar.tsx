import React from 'react';
import ButtonOutline from '../ButtonOutline/ButtonOutline';

import styles from './GreetingSidebar.module.scss';

interface GreetingSidebarProps {
  type: 'login' | 'register';
}

const GreetingSidebar: React.FC<GreetingSidebarProps> = ({ type }) => {
  return (
    <div className={styles.root}>
      <img src="/logo_outline.svg" alt="logo" />
      <h3>Добро пожаловать!</h3>
      <p>
        <b>Jamskills</b> - это сервис для автоматизации оценки сотрудников и
        кандидатов!
      </p>
      <p>Если Вы еще не зарегистрированны, создайте свой кабинет </p>
      <ButtonOutline>Создать</ButtonOutline>
    </div>
  );
};

export default GreetingSidebar;
