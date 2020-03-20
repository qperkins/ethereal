import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Header from './common/header';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='has-bg-img'>
      
       <Router>
          <Switch>
            <Route path="/" component={Home} />
            </Switch>
            </Router>
           </div>
    </React.Fragment>
  );
}

export default App;
