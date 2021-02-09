import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddReview from './component/addreview';
import DisplayReview from './component/displayreview';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route path="/viewReview" component={ DisplayReview }/>
        <Route path="/addReview" component={ AddReview }/>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
