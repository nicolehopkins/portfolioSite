import React, { Component } from 'react';
import './Home.css';
import bitmoji from '../assets/bitmoji-20190824013344.png';

// This creates the typing effect
import Typing from 'react-typing-animation';

// COMPONENTS
import Sites from './Sites';
import Icons from './Icons';


export default class Home extends Component {

  render() {
    return (
      <div>
        {/* FOR MEDIUM TO LARGE SCREENS */}
        <div className='row d-none d-md-block' style={{ margin: '0 auto', justifyContent: 'center', padding: '0' }}>
          <span style={{ padding: '25px', fontSize: '40px' }}>Developer.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Problem-Solver.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Bug-Zapper.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Camper.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Proud Aunt.</span>
        </div>
        {/* FOR SMALL TO MEDIUM SCREENS */}
        <div className='row d-sm-block d-md-none' style={{ margin: '0 auto', justifyContent: 'center' }}>
          <span style={{ padding: '5px', fontSize: '25px' }}>Developer.</span>
          <span style={{ padding: '5px', fontSize: '25px' }}>Problem-Solver.</span>
          <span style={{ padding: '5px', fontSize: '25px' }}>Bug-Zapper.</span>
          <span style={{ padding: '5px', fontSize: '25px' }}>Camper.</span>
          <span style={{ padding: '5px', fontSize: '25px' }}>Proud Aunt.</span>
        </div>
        <div className='row'>
          <div className='col-3'>
            <img src={bitmoji} alt='bitmoji' />
          </div>
          <div className='col-7 d-none d-md-block' style={{ marginTop: '150px' }}>
            {/* TYPING EFFECT IS HIDDEN ON SMALL SCREEN */}
            <Typing >
              <span className='typing' style={{ fontSize: '25px' }}>
                Hello World! I'm Nicole, a Software Developer always looking for fun projects and new challenges.
                Ask Me About: going from Paralegal to Programmer, learning new technologies, and all things "The Office".
            </span>
            </Typing>
          </div>
        </div>
        <div style={{padding: '20px', borderTop: 'ridge 1px #4598BD', backgroundColor: '#efeff5', minWidth: '100%', minHeight: '100vh' }}>
          <Sites />
        </div>
        <div style={{padding: '20px', borderTop: 'ridge 1px #4598BD', backgroundColor: 'white', minWidth: '100%', minHeight: '100vh'}}>
          <Icons />
        </div>
      </div>
    )
  }
}