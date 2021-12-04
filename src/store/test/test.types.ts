import { ITestItem } from './../../models/ITestItem';
import { ITest } from './../../models/ITest';

export interface TestState {
  tests: ITest[];
  test: ITestItem[];
  currentStep: number;
}

export enum TestActionsEnum {
  SET_TESTS = 'SET_TESTS',
  SET_TEST = 'SET_TEST',
  SET_CURRENT_STEP = 'SET_CURRENT_STEP',
}

export interface SetTestsAction {
  type: TestActionsEnum.SET_TESTS;
  payload: ITest[];
}

export interface SetTestAction {
  type: TestActionsEnum.SET_TEST;
  payload: ITestItem[];
}

export interface SetCurrentStepAction {
  type: TestActionsEnum.SET_CURRENT_STEP;
  payload: number;
}

export type TestAction = SetTestsAction | SetTestAction | SetCurrentStepAction;
