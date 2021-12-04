import { ITestItem, IHolAnswer } from './../../models/ITestItem';
import { ITest } from './../../models/ITest';
import {
  TestActionsEnum,
  SetTestsAction,
  SetTestAction,
  SetCurrentStepAction,
  AddHolAnswerAction,
} from './test.types';
import { AppDispatch } from '..';
import TestService from '../../api/TestService';

export const TestActionCreators = {
  setCurrentStep: (step: number): SetCurrentStepAction => ({
    type: TestActionsEnum.SET_CURRENT_STEP,
    payload: step,
  }),
  addHolAnswer: (answer: IHolAnswer): AddHolAnswerAction => ({
    type: TestActionsEnum.ADD_HOL_ANSWER,
    payload: answer,
  }),
  getTest: (id: string) => async (dispatch: AppDispatch) => {
    try {
      const res = await TestService.getTest(id);

      if (res.status !== 200) {
        throw new Error('Ошибка при получении теста');
      }

      dispatch(TestActionCreators.setTest(res.data));
    } catch (error) {
      console.log(error);
    }
  },
  setTest: (test: ITestItem[]): SetTestAction => ({
    type: TestActionsEnum.SET_TEST,
    payload: test,
  }),
  getTests: () => async (dispatch: AppDispatch) => {
    try {
      const res = await TestService.getTests();

      if (res.status !== 200) {
        throw new Error('Ошибка при получении тестов');
      }

      dispatch(TestActionCreators.setTests(res.data));
    } catch (error) {
      console.log(error);
    }
  },
  setTests: (tests: ITest[]): SetTestsAction => ({
    type: TestActionsEnum.SET_TESTS,
    payload: tests,
  }),
};
