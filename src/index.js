import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './components/Details';
import Travel from './components/Travel';
import Accommodations from './components/Accommodations';
import Home from './components/Home';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/travel" component={Travel}/>
        <Route exact path="/accommodations" component={Accommodations}/>
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
