import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo jamskills" />
        <span>JamSkills</span>
      </div>
      <div className={styles.user}>
        <span>Александр Игоревич</span>
        <img src="/assets/user.png" alt="user" />
      </div>
    </header>
  );
};

export default Header;
