import React, { useState } from 'react';
import { Progress } from 'antd';

import { IHolTestItem } from '../../../models/ITestItem';
import RadioButton from '../RadioButton/RadioButton';

import styles from './TestHol.module.scss';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

interface TestHolProps {
  holTestItem: IHolTestItem;
}

const TestHol: React.FC<TestHolProps> = ({ holTestItem }) => {
  const { index, answers, question } = holTestItem;
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep, addHolAnswer } = useActions();
  const [answer, setAnswer] = useState('');

  const chooseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const toNextAnswer = () => {
    addHolAnswer({
      index,
      name: answer,
    });
    setCurrentStep(currentStep + 1);
    setAnswer('');
  };

  return (
    <div className={styles.holTest}>
      <h3>{question}</h3> {answer}
      <Progress percent={50} className="test_progress" />
      <div className={styles.btns}>
        <RadioButton
          name="choice"
          text={answers.left.text}
          value={answers.left.name}
          onDoubleClick={toNextAnswer}
          onChange={chooseHandler}
          key={answers.left.name + index}
        />
        <RadioButton
          name="choice"
          text={answers.right.text}
          value={answers.right.name}
          onDoubleClick={toNextAnswer}
          onChange={chooseHandler}
          key={answers.right.name + index}
        />
      </div>
      <ButtonPrimary type="button" onClick={toNextAnswer} disabled={!answer}>
        Продолжить
      </ButtonPrimary>
    </div>
  );
};

export default TestHol;
