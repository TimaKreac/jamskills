import { TestAction, TestActionsEnum, TestState } from './test.types';

const initialState: TestState = {
  tests: [],
  test: [],
  currentStep: 0,
  answers: {
    hol: [],
    usk: [],
    gatb: [],
  },
};

export default function testReducer(
  state = initialState,
  action: TestAction
): TestState {
  switch (action.type) {
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
    default:
      return state;
  }
}
