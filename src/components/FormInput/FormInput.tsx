import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './FormInput.module.scss';

interface FormInputProps {
  type: string;
  value?: string;
  className?: string;
  placeholder?: string;
  icon?: 'mail' | 'lock' | 'person';
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  icon,
  className,
  type,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className={classNames(styles.root, className)}>
      {icon && <img src={`/assets/${icon}.svg`} alt="icon" />}
      <div className={styles.inputBox}>
        <input
          name={type}
          type={inputType}
          className={styles.input}
          autoComplete="off"
          {...props}
        />

        {type === 'password' && (
          <img
            className={styles.eye}
            src="/assets/eye.svg"
            alt="eye"
            onMouseDown={() => setInputType('text')}
            onMouseUp={() => setInputType('password')}
            onMouseLeave={() => setInputType('password')}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
