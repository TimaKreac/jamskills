import React from 'react';
import TestsTable from '../TestsTable/TestsTable';
import HomeSidebar from '../Sidebar/Sidebar';
import Statistic from '../Statistic/Statistic';
import SearchInput from '../SearchInput/SearchInput';

import styles from './Content.module.scss';

const HomeContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <HomeSidebar />
      <div className={styles.tableBox}>
        <Statistic />
        <SearchInput />
        <TestsTable />
      </div>
    </div>
  );
};

export default HomeContent;
