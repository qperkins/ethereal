import React from 'react';
import Header from '../common/header';


import logo from '../logo.png'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
              <div className='has-bg-img'> 
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
<<<<<<< HEAD

          
        <div className="hero-foot">
=======
        <div className="hero-foot middle-bg">
>>>>>>> 1824764aeb44eb8dd94fd854cd5ea6f76c2e6960
          <div className="container">
          <text>Hey now</text>
    
        </div>
      </div>
      </section>
      </div>
                </React.Fragment>
        )
    }
}