import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import RadioButton from '../RadioButton/RadioButton';

import styles from './TestUsk.module.scss';

interface ChoiceProps {
  className: string;
}

const Choice: React.FC<ChoiceProps> = ({ children, ...props }) => {
  const { currentStep } = useTypedSelector((state) => state.test);
  const { setCurrentStep } = useActions();

  return (
    <div {...props}>
      <RadioButton
        className={styles.choice}
        name="choice"
        text={children as string}
        value={'s'}
        onDoubleClick={() => setCurrentStep(currentStep + 1)}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default Choice;
