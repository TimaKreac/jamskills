import React from 'react';
import { useActions } from '../../../hooks/useActions';
import styles from './Sidebar.module.scss';

const HomeSidebar: React.FC = () => {
  const { logout } = useActions();

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <img src="/assets/home.svg" alt="icon menu" />
          <span>Домашняя страница</span>
        </li>
      </ul>
      <ul className={styles.down_menu}>
        <li>Настройки</li>
        <li>
          <img src="/assets/profile.svg" alt="icon menu" />
          <span>Профиль</span>
        </li>
        <li onClick={() => logout()}>
          <img src="/assets/exit.svg" alt="icon menu" />
          <span>Выход</span>
        </li>
      </ul>
    </aside>
  );
};

export default HomeSidebar;
