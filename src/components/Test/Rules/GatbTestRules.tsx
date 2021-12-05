import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';

import styles from './Rules.module.scss';

const GatbTestRules: React.FC = () => {
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div className={styles.rules}>
      <h3>Тест GATB</h3>
      <p>
        Вам будут представлены два множества, <br />в которых представлены
        геометрические фигуры.
      </p>
      <p className={styles.time}>Это тест на время!</p>
      <p>
        Найдите кажной фигуре первого множества соответствующую фигуру из
        второго.
      </p>
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

export default GatbTestRules;
