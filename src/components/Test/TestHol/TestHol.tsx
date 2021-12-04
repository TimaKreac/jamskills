import React from 'react';
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
  const { answers, question } = holTestItem;
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div className={styles.holTest}>
      <h3>{question}</h3>
      <Progress percent={50} className="test_progress" />
      <div className={styles.btns}>
        <RadioButton
          name="choice"
          text={answers.left.text}
          value={answers.left.name}
          onDoubleClick={() => setCurrentStep(currentStep + 1)}
          onChange={(e) => console.log(e.target.value)}
        />
        <RadioButton
          name="choice"
          text={answers.right.text}
          value={answers.right.name}
          onDoubleClick={() => setCurrentStep(currentStep + 1)}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <ButtonPrimary
        type="button"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Продолжить
      </ButtonPrimary>
    </div>
  );
};

export default TestHol;
