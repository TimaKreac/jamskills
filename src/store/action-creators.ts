import { TestActionCreators } from './test/test.actions';
import { AuthActionCreators } from './auth/auth.actions';

export const allActionCreators = {
  ...AuthActionCreators,
  ...TestActionCreators,
};
