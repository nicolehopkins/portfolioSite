import React, { Component } from 'react';
import Resume from '../assets/resume.pdf';


export default class Nav extends Component {

  render() {
    return (
      <>
        <div className="btn-group" style={{ padding: '25px'}} role="group" aria-label="Button group with nested dropdown">
          <div className="btn-group" role="group" >
            <button id="btnGroupDrop1" className="btn" style={{backgroundColor: '#4598BD', color: 'white', borderRadius: '20px'}} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              . . .
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              {/* <a className="dropdown-item" href='https://nicjs.home.blog/' target='_blank' rel='noopener noreferrer'>Blog</a> */}
              <a className="dropdown-item" href='https://github.com/nicolehopkins' target='_blank' rel='noopener noreferrer'>Github</a>
              <a className="dropdown-item" href="https://www.linkedin.com/in/nicole-hopkins-01/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
              <a className="dropdown-item" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}