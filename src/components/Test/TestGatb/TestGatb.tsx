import React from 'react';
import { Progress } from 'antd';

import styles from './TestGatb.module.scss';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const TestGatb: React.FC = () => {
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div className={styles.gatbTest}>
      <h3>Найдите соответствующие фигуры в обоих множествах</h3>
      <Progress percent={50} className="test_progress" />

      <div className={styles.images}>
        <img src="/assets/gatb-left.jpg" alt="gatb-left" />
        <img src="/assets/gatb-right.jpg" alt="gatb-right" />
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

export default TestGatb;
