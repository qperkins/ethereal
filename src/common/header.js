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
              
<<<<<<< HEAD
<<<<<<< HEAD
            <a href="etherealwd.com/Home" className="navbar-item is-active">
=======
            <a className="navbar-item is-active">
>>>>>>> 1824764aeb44eb8dd94fd854cd5ea6f76c2e6960
=======
            <a className="navbar-item is-active" href="/">
>>>>>>> 04b5a5181edc8ffcd31e3d0543e1544d69cbaaae
            
              Home
              
            </a>
            <a href="etherealwd.com/About" className="navbar-item is-primary">
              
              About
            </a>
<<<<<<< HEAD
            <a href="etherealwd.com/Contact"className="navbar-item is-primary">
=======
            <a className="navbar-item is-primary" href="/contact">
>>>>>>> 1824764aeb44eb8dd94fd854cd5ea6f76c2e6960
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