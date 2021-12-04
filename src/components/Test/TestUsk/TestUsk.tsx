import React from 'react';
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
  const { question } = uskTestItem;
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div className={styles.uskTest}>
      <h3>Выберите один из вариантов</h3>
      <Progress percent={50} className="test_progress" />
      <div className={styles.box}>
        <div className={styles.question}>{question}</div>
        <Choices />
      </div>

      <ButtonPrimary
        type="button"
        onClick={() => setCurrentStep(currentStep + 1)}
        disabled
      >
        Продолжить
      </ButtonPrimary>
    </div>
  );
};

export default TestUsk;
