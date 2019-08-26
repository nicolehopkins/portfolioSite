import React from 'react';
import { IconContext } from 'react-icons';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWordpress } from 'react-icons/fa';

const Footer = (props) => {

  return (
    <IconContext.Provider value={{ color: 'white', className: "global-class-name", size: '2em' }}>
      <nav class="navbar" style={{ backgroundColor: '#4598BD', position: 'absolute', zIndex: '2', width: '100%', height: '100px' }}>
        {/* <div className='row' style={{ color: 'white' }}>
          <h6>Contact Me:</h6>
        </div> */}
        <div className='row' style={{display: 'flex', margin: '0 auto'}}>
          <a className='col-3' href='mailto:nicolehopkins@pursuit.org'>
            <FiMail style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
          </a>
          <a className='col-3' href="https://www.linkedin.com/in/nicole-hopkins-01/" target='_blank' rel='noopener noreferrer'>
            <FiLinkedin style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
          </a>
          <a className='col-3' href='https://github.com/nicolehopkins' target='_blank' rel='noopener noreferrer'>
            <FiGithub style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
          </a>
          <a  className='col-3' href='https://nicjs.home.blog/' target='_blank' rel='noopener noreferrer'>
            <FaWordpress style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
          </a>
        </div>
      </nav>
    </IconContext.Provider>
  )
}

export default Footer;