import React from 'react';
import Header from '../components/Header/Header';
import HomeContent from '../components/Home/Content/Content';

const HomePage: React.FC = () => {
  return (
    <div className="homePage page">
      <Header />
      <HomeContent />
    </div>
  );
};

export default HomePage;
