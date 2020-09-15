import React, { Component } from 'react';

export default class Icons extends Component {

  render() {
    
    return (
      <>
        <div className='d-none d-md-block'>
          <div className='container' style={{ textAlign: 'center', padding: '50px' }}>
            <div className='row'>
              <div className='col'>
                <h2>Things I Know:</h2>
              </div>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='row' style={{ paddingBottom: '70px' }}>
              <div className='col'>
                <i className="devicon-javascript-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-html5-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-css3-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-bootstrap-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-git-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
            </div>

            <div className='row' style={{ paddingBottom: '70px' }}>
              <div className='col'>
                <i className="devicon-react-original colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-postgresql-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-nodejs-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-foundation-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col'>
                <i className="devicon-visualstudio-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
            </div>

            <div className='row' style={{ paddingBottom: '70px', justifyContent: 'center' }}>
              <div className='col-3'>
                <i class="devicon-angularjs-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-3'>
                <i class="devicon-sequelize-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
            </div>
            </div>
        </div>

        {/* FOR SMALL TO MEDIUM SCREENS */}
        <div className='d-sm-block d-md-none'>
          <div className='container' style={{ textAlign: 'center', padding: '10px' }}>
            <div className='row'>
              <div className='col' style={{ textAlign: 'center', padding: '10px' }}>
                <h2 style={{ fontSize: '21px' }} >Things I Know:</h2>
              </div>
            </div>
          </div>
          <div className='container-fluid '>
            <div className='row' style={{ paddingBottom: '70px' }}>
              <div className='col-6'>
                <i className="devicon-javascript-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-html5-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-css3-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-bootstrap-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-git-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-react-original colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-postgresql-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-nodejs-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-foundation-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i className="devicon-visualstudio-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i class="devicon-angularjs-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
              <div className='col-6'>
                <i class="devicon-sequelize-plain colored" style={{ fontSize: '160px' }}></i>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

