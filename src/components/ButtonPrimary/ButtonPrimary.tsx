import React from 'react'

import styles from './ButtonPrimary.module.scss'

interface ButtonPrimaryProps {
  text: string
  type: 'button' | 'submit' | 'reset'
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      {text}
    </button>
  )
}

export default ButtonPrimary
