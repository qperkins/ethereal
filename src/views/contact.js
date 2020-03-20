import React from "react";


export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero has-text-centered">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="is-size-1">Contact Us!</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="tile is-ancestor">
  <div className="tile is-4 is-vertical is-parent">
    <div className="tile is-child box">
      <p className="title">Company Name</p>
      <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="What's your name?" />
                 </div>
            </div>
{/*text goes here*/}
    </div>
    <div className="tile is-child box">
      <p className="title">Email</p>
      <div className="field">
  <div className="control has-icons-left has-icons-right">
    <input className="input is-danger" type="email" placeholder="example@abc.com" value="" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p className="help is-danger">This email is invalid</p>
</div>
    </div>
  </div>
  <div className="tile is-parent">
    <div className="tile is-child box">
      <p className="title">Problem?</p>
      <div className="field">
  <div className="control">
    <textarea className="textarea" placeholder="Place text here."></textarea>
  </div>
</div>
    </div>
  </div>
</div>
      </React.Fragment>
    );
  }
}
