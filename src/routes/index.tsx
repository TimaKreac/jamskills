import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TestPage from '../pages/TestPage';

export interface IRoute {
  path: string;
  element: React.ReactElement;
  exact?: boolean;
}

export enum RouteNames {
  HOME = '/',
  TEST = '/test/:id',
  LOGIN = '/login',
  REGISTER = '/register',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: <LoginPage /> },
  { path: RouteNames.REGISTER, element: <RegisterPage /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: <HomePage /> },
  { path: RouteNames.TEST, element: <TestPage /> },
];
