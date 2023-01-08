import React from 'react';
import './App.css';
import {Payment} from "./components/Payment";

function App() {
  return (
    <div className="app">
      <Payment amount={19.9} />
    </div>
  );
}

export default App;
