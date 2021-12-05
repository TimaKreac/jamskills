import React, { useEffect, useState } from 'react';
import styles from './TestGatb.module.scss';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const TestGatb: React.FC = () => {
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep, addGatbAnswer, setCurrentTest } = useActions();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCurrentTest('gatb-5');
    //eslint-disable-next-line
  }, []);

  const countHandler = () => {
    setCount(count + 1);
    addGatbAnswer({
      result: count,
    });
  };

  const finishTest = () => {
    addGatbAnswer({
      result: count,
    });
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className={styles.gatbTest}>
      <h3>Найдите соответствующие фигуры в обоих множествах</h3>

      <div className={styles.images}>
        <img
          src="/assets/gatb-left.jpg"
          alt="gatb-left"
          onClick={countHandler}
        />
        <img
          src="/assets/gatb-right.jpg"
          alt="gatb-right"
          onClick={countHandler}
        />
      </div>

      <ButtonPrimary type="button" onClick={finishTest} disabled={!count}>
        Продолжить
      </ButtonPrimary>
    </div>
  );
};

export default TestGatb;
