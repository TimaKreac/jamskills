import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Content from '../components/Test/Content/Content';
import Header from '../components/Test/Header/Header';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TestPage: React.FC = () => {
  const { getTest } = useActions();
  const params = useParams();
  const { currentStep } = useTypedSelector((state) => state.test);

  useEffect(() => {
    if (params.id) {
      getTest(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="testPage page">
      <Header stepLength={10} currentStep={currentStep} />
      <Content currentStep={currentStep} />
    </div>
  );
};

export default TestPage;
