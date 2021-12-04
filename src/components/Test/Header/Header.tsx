import React from 'react';
import { Steps } from 'antd';

import styles from './Header.module.scss';

const { Step } = Steps;

interface TestHeaderProps {
  stepLength: number;
  currentStep: number;
}

const TestHeader: React.FC<TestHeaderProps> = ({ stepLength, currentStep }) => {
  const steps = new Array(stepLength).fill('');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo jamskills" width="100" />
      </div>
      <Steps size="small" current={currentStep}>
        {steps.map((_) => (
          <Step />
        ))}
      </Steps>
    </header>
  );
};

export default TestHeader;
