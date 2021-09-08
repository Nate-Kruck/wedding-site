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
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Loader uses hearts for loading between tabs. 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route exact path="/photos" component={Photos}/>
        <Route exact path="/schedule" component={Schedule}/>
        <Route exact path="/travel" component={Travel}/>
        <Route exact path="/" component={Home}/>
        <App />
      </Switch>
    </Router>

    <Loader
      className="loader"
      type="Hearts"
      color="#d11b59"
      height={120}
      width={150}
      timeout={3000} //3 secs
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
