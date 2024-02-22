import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App1 from './App1';
import "bootstrap/dist/css/bootstrap.css";
import  'react-bootstrap';

import "./index.css";

// const head = document.getElementById('head');
// head.append(App1());

const head = ReactDOM.createRoot(document.getElementById('head'));
head.render(<App1/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


