import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
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
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: <LoginPage /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: <HomePage /> },
  { path: RouteNames.TEST, element: <TestPage /> },
];
