import { ITest } from './../../models/ITest';

export interface TestState {
  tests: ITest[];
}

export enum TestActionsEnum {
  SET_TESTS = 'SET_TESTS',
}

export interface SetTestsAction {
  type: TestActionsEnum.SET_TESTS;
  payload: ITest[];
}

export type TestAction = SetTestsAction;
