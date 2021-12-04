import React from 'react';

import Choice from './Choice';

import styles from './TestUsk.module.scss';

interface ChoicesProps {}

const Choices: React.FC<ChoicesProps> = () => {
  return (
    <div className={styles.choices}>
      <div className={styles.agree}>
        <Choice className={styles.choice}>Полностью согласен</Choice>
        <Choice className={styles.choice}>Пожалуй, согласен</Choice>
        <Choice className={styles.choice}>
          Скорее согласен, чем несогласен
        </Choice>
      </div>
      <div className={styles.disagree}>
        <Choice className={styles.choice}>
          Скорее несогласен, чем согласен
        </Choice>
        <Choice className={styles.choice}>Пожалуй, несогласен</Choice>
        <Choice className={styles.choice}>Полностью несогласен</Choice>
      </div>
    </div>
  );
};

export default Choices;
