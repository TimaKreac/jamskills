import { Progress } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './Timer.module.scss';

interface TimerProps {}

const Timer: React.FC<TimerProps> = () => {
  const deadline: number = Date.now() + 1000 * 60 * 2;
  const { currentStep, answers } = useTypedSelector((state) => state.test);
  const { setCurrentStep, addGatbAnswer } = useActions();

  const finishTest = () => {
    addGatbAnswer({
      result: answers.gatb.result,
    });
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <Progress
        type="circle"
        className={styles.timer}
        percent={99}
        format={() => (
          <Countdown value={deadline} onFinish={finishTest} format={'mm:ss'} />
        )}
      />
    </>
  );
};

export default Timer;
