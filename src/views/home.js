import React from 'react';


import logo from '../logo.png'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
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
        <div className="hero-foot">
          <div className="container">
    
    
        </div>
      </div>
      </section>
                </React.Fragment>
        )
    }
}