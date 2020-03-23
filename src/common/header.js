import React from 'react';

import slogo from '../slogo.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>

    <nav className="navbar clear">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={slogo} width="112" height="500"/>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
              
            <a className="navbar-item is-active" href="contact">
            
              Home
              
            </a>
            <a className="navbar-item is-primary">
              About
            </a>
            <a className="navbar-item is-primary" href="etherealwd.com">
              Contact
            </a>
            
          </div>
        </div>
      </div>
    </nav>
      </React.Fragment>
    );
  }
}