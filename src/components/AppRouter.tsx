import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'

const AppRouter: React.FC = () => {
  const auth = false

  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  )
}

export default AppRouter
