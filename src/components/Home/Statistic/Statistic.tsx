import React from 'react';
import StatisticItem from './StatisticItem/StatisticItem';

import styles from './Statistic.module.scss';

interface StatisticProps {}

const Statistic: React.FC<StatisticProps> = () => {
  return (
    <div className={styles.items}>
      <StatisticItem dotColor="#1890FF" title="Всего приглашений" value="234" />
      <StatisticItem
        dotColor="#52C41A"
        title="Пройдено"
        value="45"
        icon="like"
      />
      <StatisticItem
        dotColor="#FAAD14"
        title="В процессе"
        value="2"
        icon="timer"
      />
      <StatisticItem
        dotColor="#FF4D4F"
        title="Отказано"
        value="76"
        icon="fire"
      />
    </div>
  );
};

export default Statistic;
