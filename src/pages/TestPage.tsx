import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import Content from '../components/Test/Content/Content';
import Header from '../components/Test/Header/Header';
import { useActions } from '../hooks/useActions';
import { useSteps } from '../hooks/useSteps';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TestPage: React.FC = () => {
  const { getTest } = useActions();
  const params = useParams();
  const { currentStep } = useTypedSelector((state) => state.test);

  const steps = useSteps();

  useEffect(() => {
    if (params.id) {
      getTest(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="testPage page">
      <Header stepLength={steps.length} currentStep={currentStep} />
      <Content currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default TestPage;
