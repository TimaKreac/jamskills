import { ITest } from './../../models/ITest';
import { TestActionsEnum, SetTestsAction } from './test.types';
import axios from 'axios';
import { AppDispatch } from '..';

export const TestActionCreators = {
  setTests: (tests: ITest[]): SetTestsAction => ({
    type: TestActionsEnum.SET_TESTS,
    payload: tests,
  }),
  getTests: () => async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get('/testingusers/setquizzes', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      });

      if (res.status !== 200) {
        throw new Error('Ошибка');
      }

      console.log('token', res.data);
      dispatch(TestActionCreators.setTests(res.data));
    } catch (error) {
      console.log(error);
    }
  },
};
