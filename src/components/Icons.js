import React, { Component } from 'react';

export default class Icons extends Component {

  render() {
    return (
      <>
      <div>
        <div className='container' style={{ textAlign: 'center', padding: '50px' }}>
          <div className='row'>
            <div className='col'>
              <h2>Things I Know:</h2> 
            </div>
          </div>
        </div>
          <div className='row' style={{ paddingBottom: '70px'}}>
            <div className='col-sm'>
              <i className="devicon-javascript-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-html5-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-css3-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-bootstrap-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-git-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <i className="devicon-react-original colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-postgresql-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-nodejs-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-foundation-plain" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i className="devicon-visualstudio-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
          </div>
      </div>
    </>
    )
  }
}

