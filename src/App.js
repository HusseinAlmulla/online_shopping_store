import React from 'react';
import './App.css';
import CardsList from './Components/CardsList.js';
import NavBar from './Components/NavBar';
import data from './data.json';

export default function App() {
  return (
    <div className="">
      <NavBar/>
      <CardsList data={data}/>
    </div>
  );
}
