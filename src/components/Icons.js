import React, { Component } from 'react';

// Logos from Assets
import HTML from '../assets/html.svg';
import CSS from '../assets/css3.svg';
import JS from '../assets/logo-javascript.png';
import Bootstrap from '../assets/bootstrap.png';
import NodeJS from '../assets/nodejs-icon-17.jpg';
import FB from '../assets/firebase.png';
import Materialize from '../assets/materialize.png';
import Postman from '../assets/postman.png';
import Postgres from '../assets/Postgresql.png';
import ReactLogo from '../assets/react.svg';
import WP from '../assets/Wordpress-Logo.svg';


export default class Icons extends Component {

  render() {
    return (
      <>
      <div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Things I Know:</h2>
        </div>
        <div className='row' style={{ display: 'flex' }} >
          <img src={JS} alt='JavaScript icon' style={{ width: '130px', height: '182px', marginTop: '9px', margin: '25px' }} />
          <img src={HTML} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={CSS} alt='HTML icon' style={{ width: '130px', height: 'auto', margin: '25px' }} />
          <img src={Bootstrap} alt='HTML icon' style={{ width: '130px', height: '190px', paddingTop: '40px', margin: '25px' }} />
          <i class="devicon-bootstrap-plain" ></i>
          <img src={NodeJS} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={FB} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={Materialize} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={Postman} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={Postgres} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={ReactLogo} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
          <img src={WP} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
        </div>
      </div>
      {/* <div>
      <div style={{ textAlign: 'center', padding: '20px', marginTop: '50px', marginBottom: '50px' }}>
        <h2>Things I'm Currently Learning:</h2>
      </div>
      <div className='row' style={{ display: 'flex' }} >
        <img src={JS} alt='JavaScript icon' style={{ width: '130px', height: '182px', marginTop: '9px', margin: '25px' }} />
        <img src={HTML} alt='HTML icon' style={{ width: '200px', height: 'auto', margin: '25px' }} />
        <img src={CSS} alt='HTML icon' style={{ width: '130px', height: 'auto', margin: '25px' }} />
        <img src={Bootstrap} alt='HTML icon' style={{ width: '130px', height: '190px', paddingTop: '40px', margin: '25px' }} />
      </div>
    </div> */}
    </>
    )
  }
}

