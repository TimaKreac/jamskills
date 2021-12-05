import React from 'react';
import { Steps } from 'antd';

import styles from './Header.module.scss';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Timer from '../../Timer/Timer';

const { Step } = Steps;

interface TestHeaderProps {
  stepLength: number;
  currentStep: number;
}

const TestHeader: React.FC<TestHeaderProps> = ({ stepLength, currentStep }) => {
  const steps = new Array(stepLength).fill('');
  const navigate = useNavigate();
  const { currentTest } = useTypedSelector((state) => state.test);

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img src="/logo.svg" alt="logo jamskills" width="100" />
      </div>
      <Steps size="small" current={currentStep}>
        {steps.map((_, index) => (
          <Step key={index} />
        ))}
      </Steps>
      {currentTest === 'gatb-5' && <Timer />}
    </header>
  );
};

export default TestHeader;
