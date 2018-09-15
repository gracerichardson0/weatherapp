import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Telling this file to render this App component to the root div
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();