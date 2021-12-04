import { TestAction, TestActionsEnum, TestState } from './test.types';

const initialState: TestState = {
  tests: [],
  test: [],
  currentStep: 8,
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
    default:
      return state;
  }
}
