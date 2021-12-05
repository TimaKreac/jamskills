import { AppDispatch } from '..';
import UserService from '../../api/UserService';
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
  register: (user: IUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));

      const res = await UserService.registerUser(user);

      if (res.status !== 200) {
        dispatch(AuthActionCreators.setError(res.data));
        throw new Error('Регистрация завершилась некорректно');
      }

      localStorage.setItem('auth', 'true');
      localStorage.setItem('email', user.email);
      localStorage.setItem('token', res.data.token);

      dispatch(AuthActionCreators.setAuth(true));
      dispatch(AuthActionCreators.setUser(user));
      dispatch(AuthActionCreators.setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  },
  login: (user: IUser) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));

      const res = await UserService.loginUser(user);

      if (res.status !== 200) {
        dispatch(AuthActionCreators.setError(res.data));
        throw new Error('Некорректный ввод данных');
      }

      localStorage.setItem('auth', 'true');
      localStorage.setItem('email', user.email);
      localStorage.setItem('token', res.data.token);

      dispatch(AuthActionCreators.setAuth(true));
      dispatch(AuthActionCreators.setUser(user));
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
