import { TestAction, TestActionsEnum, TestState } from './test.types';

const initialState: TestState = {
  tests: [],
};

export default function testReducer(
  state = initialState,
  action: TestAction
): TestState {
  switch (action.type) {
    case TestActionsEnum.SET_TESTS:
      return { ...state, tests: action.payload };
    default:
      return state;
  }
}
