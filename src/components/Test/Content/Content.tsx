import React from 'react';
import HolTest from '../Rules/HolTest/HolTest';

import styles from './Content.module.scss';

interface ContentProps {}

const TestContent: React.FC<ContentProps> = () => {
  return (
    <div className={styles.content}>
      <HolTest />
    </div>
  );
};

export default TestContent;
