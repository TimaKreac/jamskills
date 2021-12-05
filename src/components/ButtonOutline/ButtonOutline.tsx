import React from 'react';

import styles from './ButtonOutline.module.scss';

interface ButtonOutlineProps {
  onClick?: () => void;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  children,
  ...props
}) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default ButtonOutline;
