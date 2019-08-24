import React from 'react';

const Footer = (props) => {

  return (
    <>
      <nav class="navbar" style={{backgroundColor: '#4598BD', position: 'absolute', bottom: '0', width: '100%', height: '70px'}}>
        <a class="navbar-brand" href="#">
          <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
          Bootstrap
        </a>
      </nav>
    </>
  )
}

export default Footer;