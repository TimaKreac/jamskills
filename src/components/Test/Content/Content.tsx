import React from 'react';
import { hol, usk } from '../data';
import TestHol from '../TestHol/TestHol';
import TestUsk from '../TestUsk/TestUsk';
import HolTestRules from '../Rules/HolTestRules';
import UskTestRules from '../Rules/UskTestRules';

import styles from './Content.module.scss';
import GatbTestRules from '../Rules/GatbTestRules';
import TestGatb from '../TestGatb/TestGatb';

interface ContentProps {
  currentStep: number;
}

const steps = {
  0: <HolTestRules />,
  1: <TestHol holTestItem={hol[0]} />,
  2: <TestHol holTestItem={hol[1]} />,
  3: <TestHol holTestItem={hol[2]} />,
  4: <UskTestRules />,
  5: <TestUsk uskTestItem={usk[0]} />,
  6: <TestUsk uskTestItem={usk[1]} />,
  7: <TestUsk uskTestItem={usk[2]} />,
  8: <GatbTestRules />,
  9: <TestGatb />,
} as { [key: number]: React.ReactElement };

const TestContent: React.FC<ContentProps> = ({ currentStep }) => {
  return <div className={styles.content}>{steps[currentStep]}</div>;
};

export default TestContent;
