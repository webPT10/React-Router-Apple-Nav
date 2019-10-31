import React from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './Components/NavWrapper';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavWrapper />
      <Route exact path="/"/> 
      <Route path="/Nav/:id"/>
      <Route path="/SubNav"/> 
    </div>
  );
}
//Route -- need component added to them
export default App;
