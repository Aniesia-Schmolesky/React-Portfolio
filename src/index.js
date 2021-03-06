import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Your routes.js file
import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render((
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('root')
);