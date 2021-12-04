import React from 'react';
import { Steps } from 'antd';

import styles from './Header.module.scss';
import { useNavigate } from 'react-router';

const { Step } = Steps;

interface TestHeaderProps {
  stepLength: number;
  currentStep: number;
}

const TestHeader: React.FC<TestHeaderProps> = ({ stepLength, currentStep }) => {
  const steps = new Array(stepLength).fill('');
  const navigate = useNavigate();

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
    </header>
  );
};

export default TestHeader;
