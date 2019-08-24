import React, { Component } from 'react';


export default class Nav extends Component {

  render() {
    return (
      <>
        <div className="btn-group" style={{ padding: '20px' }} role="group" aria-label="Button group with nested dropdown">
          <div className="btn-group" role="group">
            <button id="btnGroupDrop1" class="btn btn-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              . . .
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a className="dropdown-item" href='#/aboutme'>About Me</a>
              <a className="dropdown-item" href='#/portfolio'>Portfolio</a>
              <a className="dropdown-item" href='https://github.com/nicolehopkins' target='_blank' rel='noopener noreferrer'>Github</a>
              <a className="dropdown-item" href='https://nicjs.home.blog/' target='_blank' rel='noopener noreferrer'>Blog</a>
              <a className="dropdown-item" href="#/contact">Contact Me</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}