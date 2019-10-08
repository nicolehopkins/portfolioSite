import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
// import { FaWordpress } from 'react-icons/fa';

export default class Footer extends Component {

  state = {
    currentYear: null,
  }

  componentDidMount() {
    let year = new Date().getFullYear();
    return this.setState({ currentYear: year })
  }


  render() {
    const { currentYear } = this.state;
    // console.log('in render year is: ' + currentYear)
    return (
      <IconContext.Provider value={{ color: 'white', className: "global-class-name", size: '2em' }}>

        {/* FOR MAEDIUM TO LARGE SCREENS */}
        <div className='d-none d-md-block'>
          <nav className="navbar" style={{ backgroundColor: '#4598BD', position: 'absolute', zIndex: '2', width: '100%', height: '75px' }}>
            <div className='row'>
              <span style={{ color: 'white', textAlign: 'left', paddingLeft: '10px' }}>&copy; {currentYear} Nicole Hopkins</span>
            </div>
            <div className='row' style={{ display: 'flex', margin: '0 auto' }}>
              <a className='col-sm' href='mailto:nicolehopkins@pursuit.org'>
                <FiMail style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
              </a>
              <a className='col-sm' href="https://www.linkedin.com/in/nicole-hopkins-01/" target='_blank' rel='noopener noreferrer'>
                <FiLinkedin style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
              </a>
              <a className='col-sm' href='https://github.com/nicolehopkins' target='_blank' rel='noopener noreferrer'>
                <FiGithub style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
              </a>
              {/* Will put this in once I start my blog */}
              {/* <a  className='col-sm' href='https://nicjs.home.blog/' target='_blank' rel='noopener noreferrer'>
              <FaWordpress style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
              </a> */}
            </div>
          </nav>
        </div>

        {/* FOR SMALL TO MEDIUM SCREENS */}
        <div className='d-sm-block d-md-none'>
          <nav className="navbar" style={{ backgroundColor: '#4598BD', position: 'absolute', zIndex: '2', width: '100%', height: '75px' }}>
            <div className='row'>
              <span style={{ color: 'white', textAlign: 'left', paddingLeft: '10px' }}>&copy; {currentYear} Nicole Hopkins</span>
            </div>
            <div className='row' style={{ display: 'flex', margin: '0 auto' }}>
              <a className='col-sm' href='mailto:nicolehopkins@pursuit.org'>
                <FiMail style={{ size: '20px', marginLeft: '40px', marginRight: '40px' }} />
              </a>
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    )
  }
}
