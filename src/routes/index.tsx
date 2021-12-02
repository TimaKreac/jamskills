import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export enum RouteNames {
  HOME = '/',
  LOGIN = '/login',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: <LoginPage /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: <HomePage /> },
];
