import React from 'react';
import GreetingSidebar from '../components/GreetingSidebar/GreetingSidebar';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="loginPage page">
      <GreetingSidebar type="login" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
