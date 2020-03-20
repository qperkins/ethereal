import React from 'react';
import Header from '../common/header'


import logo from '../logo.png'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
              <Header />
          <section className="hero has-text-centered">
           
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                   <img src={logo} width="600" />
                </div>
              </div>
            </div>
          </div>
        <div className="hero-foot middle-bg">
          <div className="container">
          <text>Hey now</text>
    
        </div>
      </div>
      </section>
                </React.Fragment>
        )
    }
}