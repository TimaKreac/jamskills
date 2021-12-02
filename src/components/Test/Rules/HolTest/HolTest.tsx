import React from 'react';
import ButtonPrimary from '../../../ButtonPrimary/ButtonPrimary';
import RadioButton from '../../RadioButton/RadioButton';

import styles from './HolTest.module.scss';

const HolTest: React.FC = () => {
  return (
    <div className={styles.holTest}>
      <h3>Тест Холланда</h3>
      <p>Вам попарно будут представлены различные профессии, например:</p>
      <div className={styles.btns}>
        <RadioButton name="choice" text="ЗООТЕХНИК" />
        <RadioButton name="choice" text="ГЛАВНЫЙ ВРАЧ" />
      </div>
      <p>В каждой паре Вам следует отдать предпочтение какой-то одной.</p>
      <p>
        Выбрать вариант можно при помощи мыши. Подтвердить выбор можно через
        двойной щелчок или кнопки “Продолжить”.
      </p>
      <ButtonPrimary type="button">Все понятно!</ButtonPrimary>
    </div>
  );
};

export default HolTest;
