import React from 'react';
import classNames from 'classnames';
import styles from './FormInputGroup.module.scss';
import { Row } from 'antd';

interface FormInputGroupProps {
  type: string;
  values: string[];
  names: string[];
  className?: string;
  placeholders: string[];
  icon?: 'mail' | 'lock' | 'person';
  required?: boolean;
  count: 2 | 3;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputGroup: React.FC<FormInputGroupProps> = ({
  icon,
  className,
  type,
  count,
  placeholders,
  values,
  names,
  ...props
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {icon && <img src={`/assets/${icon}.svg`} alt="icon" />}
      <div className={styles.inputBox}>
        <input
          name={names[0]}
          type={type}
          className={styles.input}
          autoComplete="off"
          placeholder={placeholders[0]}
          value={values[0]}
          {...props}
        />
        <Row justify="space-between">
          {count > 1 && (
            <input
              name={names[1]}
              type={type}
              className={classNames(styles.input, styles.second)}
              autoComplete="off"
              placeholder={placeholders[1]}
              value={values[1]}
              style={{ width: count === 2 ? 570 : 200 }}
              {...props}
            />
          )}
          {count > 2 && (
            <input
              name={names[2]}
              type={type}
              className={classNames(styles.input, styles.third)}
              autoComplete="off"
              placeholder={placeholders[2]}
              value={values[2]}
              {...props}
            />
          )}
        </Row>
      </div>
    </div>
  );
};

export default FormInputGroup;
