import React, { useState } from 'react';

import Choice from './Choice';

import styles from './TestUsk.module.scss';

interface ChoicesProps {
  onSetAnswer: (answer: string) => void;
  onDoubleClick?: () => void;
}

const Choices: React.FC<ChoicesProps> = ({ onSetAnswer, onDoubleClick }) => {
  const chooseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetAnswer(e.target.value);
  };

  return (
    <div className={styles.choices}>
      <div className={styles.agree}>
        <Choice
          className={styles.choice}
          code="3"
          onChange={chooseHandler}
          onDoubleClick={onDoubleClick}
        >
          Полностью согласен
        </Choice>
        <Choice
          className={styles.choice}
          code="2"
          onChange={chooseHandler}
          onDoubleClick={onDoubleClick}
        >
          Пожалуй, согласен
        </Choice>
        <Choice
          className={styles.choice}
          code="1"
          onChange={chooseHandler}
          onDoubleClick={onDoubleClick}
        >
          Скорее согласен, чем несогласен
        </Choice>
      </div>
      <div className={styles.disagree}>
        <Choice
          className={styles.choice}
          code="-1"
          onChange={chooseHandler}
          onDoubleClick={onDoubleClick}
        >
          Скорее несогласен, чем согласен
        </Choice>
        <Choice
          className={styles.choice}
          code="-2"
          onChange={chooseHandler}
          onDoubleClick={onDoubleClick}
        >
          Пожалуй, несогласен
        </Choice>
        <Choice
          className={styles.choice}
          code="-3"
          onChange={chooseHandler}
          onDoubleClick={onDoubleClick}
        >
          Полностью несогласен
        </Choice>
      </div>
    </div>
  );
};

export default Choices;
