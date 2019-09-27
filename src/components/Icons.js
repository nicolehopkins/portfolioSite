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
              <i class="devicon-javascript-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-html5-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-css3-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-bootstrap-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-git-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <i class="devicon-react-original colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-postgresql-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-nodejs-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-foundation-plain" style={{ fontSize: '160px'}}></i>
            </div>
            <div className='col-sm'>
              <i class="devicon-visualstudio-plain colored" style={{ fontSize: '160px'}}></i>
            </div>
          </div>
      </div>
    </>
    )
  }
}

