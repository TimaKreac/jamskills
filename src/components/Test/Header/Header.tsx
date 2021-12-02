import React from 'react';
import { Steps } from 'antd';

import styles from './Header.module.scss';

const { Step } = Steps;

interface TestHeaderProps {}

const TestHeader: React.FC<TestHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo jamskills" width="100" />
      </div>
      <Steps size="small" current={0}>
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
      </Steps>
    </header>
  );
};

export default TestHeader;
