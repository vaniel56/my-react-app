import React from 'react';
import './App.css';
import Hero from './component/features/home/Hero';
import Main from './component/features/home/main';
import Header from './component/features/layout/header';
import Footer from './component/features/layout/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
