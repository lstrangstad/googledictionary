import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Dictionary from './pages/Dictionary';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <Router>
      <App>
         <Switch>
            <Route path='/' exact component={Dictionary} />
            <Route path='/about' exact component={About} />
         </Switch>
      </App>
   </Router>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
