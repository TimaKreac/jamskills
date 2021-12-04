import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import RadioButton from '../RadioButton/RadioButton';

import styles from './Rules.module.scss';

const HolTestRules: React.FC = () => {
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div className={styles.rules}>
      <h3>Тест Холланда</h3>
      <p>Вам попарно будут представлены различные профессии, например:</p>
      <div className={styles.btns}>
        <RadioButton
          name="choice"
          text="ЗООТЕХНИК"
          onDoubleClick={() => setCurrentStep(currentStep + 1)}
        />
        <RadioButton
          name="choice"
          text="ГЛАВНЫЙ ВРАЧ"
          onDoubleClick={() => setCurrentStep(currentStep + 1)}
        />
      </div>
      <p>В каждой паре Вам следует отдать предпочтение какой-то одной.</p>
      <p>
        Выбрать вариант можно при помощи мыши. Подтвердить выбор можно через
        двойной щелчок или кнопки “Продолжить”.
      </p>
      <ButtonPrimary
        type="button"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Все понятно!
      </ButtonPrimary>
    </div>
  );
};

export default HolTestRules;
