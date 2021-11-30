import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './FormInput.module.scss'

interface FormInputProps {
  type: string
  className?: string
  placeholder: string
  icon: 'mail' | 'lock' | 'person'
  required: boolean
}

const FormInput: React.FC<FormInputProps> = ({
  icon,
  className,
  type,
  ...props
}) => {
  const [passwordType, setPasswordType] = useState(type)

  return (
    <div className={classNames(styles.root, className)}>
      <img src={`/assets/${icon}.svg`} alt='icon' />
      <div className={styles.inputBox}>
        <input type={passwordType} className={styles.input} {...props} />
        {type === 'password' && (
          <img
            className={styles.eye}
            src='/assets/eye.svg'
            alt='eye'
            onMouseDown={() => setPasswordType('text')}
            onMouseUp={() => setPasswordType('password')}
            onMouseLeave={() => setPasswordType('password')}
          />
        )}
      </div>
    </div>
  )
}

export default FormInput
