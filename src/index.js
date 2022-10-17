import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Planeta } from './componentes/Planeta';
import { ContadorAutomatico } from './componentes/ContadorAutomatico';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Planeta />
    <ContadorAutomatico/>
  </React.StrictMode>
);

reportWebVitals();
