import { useState } from 'react';
import './App.css';
import Header from './components/UI/Layout/Header/Header';
import Footer from './components/UI/Layout/Footer/Footer';
import GamepadPreview from './components/GamepadPreview/GamepadPreview';
import GamepadListener from './components/functionalComponents/GamepadListener';

const App = () => {
  return (
    <>
      <GamepadListener />
      <Header />
      <Footer />
      <GamepadPreview />
    </>
  );
};

export default App;
