import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import Travel from './components/Travel';
import Home from './components/Home';
import Photos from './components/Photos';
// import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FaqPage from './components/FaqPage';
import Registry from './components/Registry';
import Ephotos from './components/Engagement';

// Loader uses hearts for loading between tabs. 

ReactDOM.render(
  
    <Router>
      {/* <Link to='/photos'>photos</Link>
      <Link to='/schedule'>schedule</Link>
      <Link to='/travel'>travel</Link>
      <Link to='/faq'>faq</Link> */}
      <Switch>
        <Route 
          path="/"
          exact 
          component={Home}/>
        <Route 
          path="/photos" 
          exact
          component={Photos}/>
        <Route 
          path="/schedule"
          exact 
          component={Schedule}/>
        <Route 
          path="/travel"
          exact 
          component={Travel}/>
        <Route 
          path="/faq"
          exact 
          component={FaqPage}/>
        <Route 
          path="/registry"
          exact 
          component={Registry}/>
        <Route
          path="/engagement-photos"
          exact
          component={Ephotos}/>
        <App />
      </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
