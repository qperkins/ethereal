import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Contact from './views/contact';
import Header from './common/header';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/* 
      while working on pages leave this commented. when done coding something
      and wanting to push the repo uncomment the divs
      Use bulma for styling, write custom css app.css
      <div className='has-bg-img'> */}
      <Header />
       <Router>
          <Switch>
            <Route path="/" component={Contact} />
            </Switch>
            </Router>
           {/* </div> */}
    </React.Fragment>
  );
}

export default App;
