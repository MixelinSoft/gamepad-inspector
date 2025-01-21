import { useState } from 'react';
import './App.css';
import Header from './components/UI/Layout/Header/Header';
import Footer from './components/UI/Layout/Footer/Footer';
import GamepadPreview from './components/GamepadPreview/GamepadPreview';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <GamepadPreview />
    </>
  );
};

export default App;
