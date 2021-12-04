import React, { useState } from 'react';
import { Progress } from 'antd';

import { IUskTestItem } from '../../../models/ITestItem';

import styles from './TestUsk.module.scss';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import Choices from './Choices';

interface TestUskProps {
  uskTestItem: IUskTestItem;
}

const TestUsk: React.FC<TestUskProps> = ({ uskTestItem }) => {
  const { index, question } = uskTestItem;
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep, addUskAnswer } = useActions();
  const [answer, setAnswer] = useState('');

  const toNextAnswer = () => {
    addUskAnswer({
      index,
      code: answer,
    });
    setCurrentStep(currentStep + 1);
    setAnswer('');
  };

  return (
    <div className={styles.uskTest}>
      <h3>Выберите один из вариантов</h3>
      <Progress percent={50} className="test_progress" />
      <div className={styles.box}>
        <div className={styles.question}>{question}</div>
        <Choices
          key={index}
          onSetAnswer={(answer) => setAnswer(answer)}
          onDoubleClick={toNextAnswer}
        />
      </div>

      <ButtonPrimary type="button" onClick={toNextAnswer} disabled={!answer}>
        Продолжить
      </ButtonPrimary>
    </div>
  );
};

export default TestUsk;
