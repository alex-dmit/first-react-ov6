// @ts-check
// ES modules JavaScript => EcmaScript 6
import React from 'react';
// CommonJS
// const React = require('react')
// TypeScript
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
// JSX - JavaScript and XML
// TSX
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
