import React from 'react';

import styles from './StatisticItem.module.scss';

interface StatisticItemProps {
  dotColor: string;
  title: string;
  value: string;
  icon?: 'like' | 'timer' | 'fire';
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  dotColor,
  title,
  value,
  icon,
}) => {
  return (
    <div>
      <p className={styles.title}>
        <span style={{ background: dotColor }} /> {title}
      </p>
      <p className={styles.value}>
        {icon && <img src={`/assets/${icon}.svg`} alt="icon" />}
        {value}
      </p>
    </div>
  );
};

export default StatisticItem;
