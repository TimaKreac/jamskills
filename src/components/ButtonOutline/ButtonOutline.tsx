import React from 'react';

import styles from './ButtonOutline.module.scss';

const ButtonOutline: React.FC = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default ButtonOutline;
