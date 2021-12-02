import axios from 'axios';
import { AppDispatch } from '..';
import { IUser } from './../../models/IUser';
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './auth.types';

export const AuthActionCreators = {
  setAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuth,
  }),
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: object): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));

      const res = await axios.post(
        '/testingusers/login',
        {
          email,
          password,
        },
        {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        }
      );

      if (res.status !== 200) {
        dispatch(AuthActionCreators.setError(res.data));
        throw new Error('Некорректный ввод данных');
      }

      localStorage.setItem('auth', 'true');
      localStorage.setItem('email', email);
      localStorage.setItem('token', res.data.token);

      dispatch(AuthActionCreators.setAuth(true));
      dispatch(AuthActionCreators.setUser({ email, password }));

      dispatch(AuthActionCreators.setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
  },
};
