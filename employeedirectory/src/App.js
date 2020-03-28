import React from 'react';
import Directory from "./pages/Directory";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Directory />
      </Wrapper>
    </div>
  );
}

export default App;
