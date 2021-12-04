import { ITestItem, IHolAnswer, IUskAnswer } from './../../models/ITestItem';
import { ITest } from './../../models/ITest';

export interface TestState {
  tests: ITest[];
  test: ITestItem[];
  currentStep: number;
  answers: {
    hol: IHolAnswer[];
    usk: IUskAnswer[];
    gatb: [];
  };
}

export enum TestActionsEnum {
  SET_TESTS = 'SET_TESTS',
  SET_TEST = 'SET_TEST',
  SET_CURRENT_STEP = 'SET_CURRENT_STEP',
  ADD_HOL_ANSWER = 'ADD_HOL_ANSWER',
  ADD_USK_ANSWER = 'ADD_USK_ANSWER',
  ADD_GATB_ANSWER = 'ADD_GATB_ANSWER',
}

export interface AddHolAnswerAction {
  type: TestActionsEnum.ADD_HOL_ANSWER;
  payload: IHolAnswer;
}

export interface AddUskAnswerAction {
  type: TestActionsEnum.ADD_USK_ANSWER;
  payload: IUskAnswer;
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

export type TestAction =
  | SetTestsAction
  | SetTestAction
  | SetCurrentStepAction
  | AddHolAnswerAction
  | AddUskAnswerAction;
