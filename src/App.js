import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Contact from "./views/contact";
import Header from "./common/header";
import "./App.css";

function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
       <Router>
          <Switch>
            <Route path="/" component={Contact}/>
            </Switch>
            <Route path="/contact" component={Contact} />
            
            </Router>
           {/* </div> */}
        
=======
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
>>>>>>> 1824764aeb44eb8dd94fd854cd5ea6f76c2e6960
    </React.Fragment>
  );
}

export default App;
