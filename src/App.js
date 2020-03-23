import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Contact from './views/contact';
import Header from './common/header';
import './App.css';

function App() {
  return (
    <React.Fragment>

       <Router>
          <Switch>
            <Route path="/" component={Home} />
            </Switch>
            <Route path="/contact" component={Contact} />
            <Route path="*" />
            </Router>

    </React.Fragment>
  );
}

export default App;
