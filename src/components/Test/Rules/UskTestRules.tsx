import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';

import styles from './Rules.module.scss';

const UskTestRules: React.FC = () => {
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div className={styles.rules}>
      <h3>Тест УСК</h3>
      <p>
        Вам предстоит оценить ряд утверждений, касающихся различных сторон
        жизни. <br /> Просим вас отвечать правдиво и быстро.
      </p>
      <p>
        Помните, что нет ответов хороших и плохих, правильных и неправильных.
        Просто мы все разные.
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

export default UskTestRules;
