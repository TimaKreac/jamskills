import { Row } from 'antd';
import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Content.module.scss';

interface ContentProps {
  currentStep: number;
  steps: React.ReactElement[];
}

const TestContent: React.FC<ContentProps> = ({ steps, currentStep }) => {
  if (steps.length === 0) {
    return (
      <Row align="middle" justify="center">
        <ReactLoading
          type={'bars'}
          color={'#1890FF'}
          height={667}
          width={375}
        />
      </Row>
    );
  }

  return <div className={styles.content}>{steps[currentStep]}</div>;
};

export default TestContent;

// const steps = {
//   0: <HolTestRules />,
//   1: <TestHol holTestItem={hol[0]} />,
//   2: <TestHol holTestItem={hol[1]} />,
//   3: <TestHol holTestItem={hol[2]} />,
//   4: <UskTestRules />,
//   5: <TestUsk uskTestItem={usk[0]} />,
//   6: <TestUsk uskTestItem={usk[1]} />,
//   7: <TestUsk uskTestItem={usk[2]} />,
//   8: <GatbTestRules />,
//   9: <TestGatb />,
// } as { [key: number]: React.ReactElement };
