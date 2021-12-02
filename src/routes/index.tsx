import React from 'react';
import LoginPage from '../pages/LoginPage';

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export enum RouteNames {
  LOGIN = '/login',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: <LoginPage /> },
];

export const privateRoutes: IRoute[] = [{ path: '/', element: <LoginPage /> }];
