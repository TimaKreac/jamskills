import React from 'react';
import classNames from 'classnames';

import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  className?: string;
  id?: string;
  name: string;
  text: string;
  value?: string;
  onDoubleClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  name,
  id,
  text,
  value,
  onDoubleClick,
  onChange,
}) => {
  return (
    <label
      className={classNames(styles.button, className)}
      onDoubleClick={onDoubleClick}
    >
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <span>{text}</span>
    </label>
  );
};

export default RadioButton;
