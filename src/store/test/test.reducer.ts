import { IGatbAnswer } from './../../models/ITestItem';
import { TestAction, TestActionsEnum, TestState } from './test.types';

const initialState: TestState = {
  tests: [],
  test: [],
  currentStep: 0,
  answers: {
    hol: [],
    usk: [],
    gatb: {} as IGatbAnswer,
  },
  currentTest: '',
};

export default function testReducer(
  state = initialState,
  action: TestAction
): TestState {
  switch (action.type) {
    case TestActionsEnum.SET_CURRENT_TEST:
      return { ...state, currentTest: action.payload };
    case TestActionsEnum.SET_TEST:
      return { ...state, test: action.payload };
    case TestActionsEnum.SET_TESTS:
      return { ...state, tests: action.payload };
    case TestActionsEnum.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case TestActionsEnum.ADD_HOL_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          hol: [...state.answers.hol, action.payload],
        },
      };
    case TestActionsEnum.ADD_USK_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          usk: [...state.answers.usk, action.payload],
        },
      };
    case TestActionsEnum.ADD_GATB_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          gatb: action.payload,
        },
      };
    case TestActionsEnum.SET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
}
