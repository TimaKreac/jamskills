import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ITestItem } from '../../../models/ITestItem';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';

interface TestResultProps {}

const TestResult: React.FC<TestResultProps> = () => {
  const { setCurrentTest, sendHolAnswers, sendUskAnswers, sendGatbAnswers } =
    useActions();
  const { test } = useTypedSelector((state) => state.test);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentTest('');
    test.forEach((item: ITestItem) => {
      if (params.id) {
        if (item.quiz === 'hol') {
          sendHolAnswers(params.id);
        } else if (item.quiz === 'usk') {
          sendUskAnswers(params.id);
        } else if (item.quiz === 'gatb-5') {
          sendGatbAnswers(params.id);
        }
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <p>
      <h2 style={{ fontSize: 30, margin: '50px 0' }}>Тест пройден!</h2>;
      <ButtonPrimary type="button" onClick={() => navigate('/')}>
        К тестам
      </ButtonPrimary>
    </p>
  );
};

export default TestResult;
