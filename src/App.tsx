import React, { useEffect } from 'react';

import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';

const App: React.FC = () => {
  const { setAuth } = useActions();

  useEffect(() => {
    const isAuth = localStorage.getItem('auth');
    const token = localStorage.getItem('token');
    if (isAuth && token) {
      setAuth(true);
    }
  }, [setAuth]);

  return <AppRouter />;
};

export default App;
