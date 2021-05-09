import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './CounterApp';
import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<CounterApp number = { 262436 } />, divRoot);
ReactDOM.render(<FirstApp greeting = 'Hello, Im Cristhian' />, divRoot);