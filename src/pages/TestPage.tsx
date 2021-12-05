import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import Content from '../components/Test/Content/Content';
import Header from '../components/Test/Header/Header';
import { useActions } from '../hooks/useActions';
import { useSteps } from '../hooks/useSteps';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TestPage: React.FC = () => {
  const { getTest, setCurrentStep, setAnswers } = useActions();
  const params = useParams();
  const { currentStep, answers } = useTypedSelector((state) => state.test);

  const steps = useSteps();

  useEffect(() => {
    if (params.id) {
      getTest(params.id);
    }

    const test = localStorage.getItem(`test${params.id}`);

    if (test) {
      const testObj = JSON.parse(test);

      setAnswers(testObj.answers);
      setCurrentStep(testObj.currentStep || 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(
      `test${params.id}`,
      JSON.stringify({ answers, currentStep })
    );
  }, [answers, currentStep, params.id]);

  return (
    <div className="testPage page">
      <Header stepLength={steps.length} currentStep={currentStep} />
      <Content currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default TestPage;
