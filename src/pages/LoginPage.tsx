import React from 'react';
import GreetingSidebar from '../components/GreetingSidebar/GreetingSidebar';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="loginPage">
      <GreetingSidebar type="login" />
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
