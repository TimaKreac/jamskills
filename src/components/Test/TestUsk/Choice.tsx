import React from 'react';
import RadioButton from '../RadioButton/RadioButton';

import styles from './TestUsk.module.scss';

interface ChoiceProps {
  className?: string;
  code: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDoubleClick?: () => void;
}

const Choice: React.FC<ChoiceProps> = ({
  children,
  code,
  onChange,
  onDoubleClick,
  ...props
}) => {
  return (
    <div {...props}>
      <RadioButton
        className={styles.choice}
        name="choice"
        text={children as string}
        value={code}
        onDoubleClick={onDoubleClick}
        onChange={onChange}
      />
    </div>
  );
};

export default Choice;
