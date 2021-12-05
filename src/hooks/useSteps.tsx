import { hol, usk } from '../components/Test/data';
import { ITestItem } from '../models/ITestItem';
import { useTypedSelector } from './useTypedSelector';
import HolTestRules from '../components/Test/Rules/HolTestRules';
import UskTestRules from '../components/Test/Rules/UskTestRules';
import GatbTestRules from '../components/Test/Rules/GatbTestRules';
import TestHol from '../components/Test/TestHol/TestHol';
import TestUsk from '../components/Test/TestUsk/TestUsk';
import TestGatb from '../components/Test/TestGatb/TestGatb';
import TestResult from '../components/Test/Result/Result';

export const useSteps = () => {
  const steps: React.ReactElement[] = [];

  const { test } = useTypedSelector((state) => state.test);

  test.forEach((item: ITestItem) => {
    if (item.quiz === 'hol') {
      steps.push(<HolTestRules />);
      hol.forEach((_, index) => {
        steps.push(
          <TestHol
            holTestItem={hol[index]}
            count={hol.length}
            currentQuestion={index}
          />
        );
      });
    } else if (item.quiz === 'usk') {
      steps.push(<UskTestRules />);
      usk.forEach((_, index) => {
        steps.push(
          <TestUsk
            uskTestItem={usk[index]}
            count={usk.length}
            currentQuestion={index}
          />
        );
      });
    } else if (item.quiz === 'gatb-5') {
      steps.push(<GatbTestRules />);
      steps.push(<TestGatb />);
    }
  });
  steps.push(<TestResult />);

  return steps;
};
