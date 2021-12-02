import React from 'react';
import Content from '../components/Test/Content/Content';
import Header from '../components/Test/Header/Header';

const TestPage: React.FC = () => {
  return (
    <div className="testPage page">
      <Header />
      <Content />
    </div>
  );
};

export default TestPage;
