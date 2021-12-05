import {
  ITestItem,
  IHolAnswer,
  IUskAnswer,
  IGatbAnswer,
  IAnswers,
} from './../../models/ITestItem';
import { ITest } from './../../models/ITest';

export interface TestState {
  tests: ITest[];
  test: ITestItem[];
  currentStep: number;
  answers: IAnswers;
  currentTest: 'hol' | 'usk' | 'gatb-5' | '';
}

export enum TestActionsEnum {
  SET_TESTS = 'SET_TESTS',
  SET_TEST = 'SET_TEST',
  SET_CURRENT_TEST = 'SET_CURRENT_TEST',
  SET_CURRENT_STEP = 'SET_CURRENT_STEP',
  ADD_HOL_ANSWER = 'ADD_HOL_ANSWER',
  ADD_USK_ANSWER = 'ADD_USK_ANSWER',
  ADD_GATB_ANSWER = 'ADD_GATB_ANSWER',
  SET_ANSWERS = 'SET_ANSWERS',
}

export interface SetCurrentTestAction {
  type: TestActionsEnum.SET_CURRENT_TEST;
  payload: 'hol' | 'usk' | 'gatb-5' | '';
}

export interface SetAnswersAction {
  type: TestActionsEnum.SET_ANSWERS;
  payload: IAnswers;
}

export interface AddHolAnswerAction {
  type: TestActionsEnum.ADD_HOL_ANSWER;
  payload: IHolAnswer;
}

export interface AddUskAnswerAction {
  type: TestActionsEnum.ADD_USK_ANSWER;
  payload: IUskAnswer;
}

export interface AddGatbAnswerAction {
  type: TestActionsEnum.ADD_GATB_ANSWER;
  payload: IGatbAnswer;
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
  | AddUskAnswerAction
  | AddGatbAnswerAction
  | SetAnswersAction
  | SetCurrentTestAction;
