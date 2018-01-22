import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import GeoLocation from './components/GeoLocation.js';

const App = () => (
    <GeoLocation />
);

render(<App />, document.getElementById('root'));


export default App;
