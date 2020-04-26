import React from 'react';
import './App.css';
import CardsList from './Components/CardsList.js';
import data from './data.json';

function App() {
  return (
    <div className="">
      <CardsList data={data}/>
    </div>
  );
}

export default App;
