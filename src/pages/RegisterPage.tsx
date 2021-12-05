import React from 'react';
import GreetingSidebar from '../components/GreetingSidebar/GreetingSidebar';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="registerPage page">
      <GreetingSidebar type="register" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
