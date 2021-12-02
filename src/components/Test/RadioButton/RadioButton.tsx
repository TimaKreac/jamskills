import React from 'react';

import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  id?: string;
  name: string;
  text: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, id, text }) => {
  return (
    <label className={styles.button}>
      <input type="radio" name={name} id={id} />
      <span>{text}</span>
    </label>
  );
};

export default RadioButton;
