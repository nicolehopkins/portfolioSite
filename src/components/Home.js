import React, { Component } from 'react';
import './Home.css'
import bitmoji from '../assets/bitmoji-20190824013344.png';
import Typing from 'react-typing-animation';

// COMPONENTS
import Sites from './Sites';
import Languages from './Languages';


export default class Home extends Component {

  render() {

    return (
      <div>
        <div className='row' style={{ margin: '0 auto', justifyContent: 'center' }}>
          <span style={{ padding: '25px', fontSize: '40px' }}>Developer.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Problem-Solver.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Bug-Zapper.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Camper.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Proud Aunt.</span>
        </div>
        <div className='row'>
          <div className='col-3'>
            <img src={bitmoji} alt='bitmoji' />
          </div>
          <div className='col-7' style={{ marginTop: '150px' }}>
            <Typing>
              <span className='typing' style={{ fontSize: '25px' }}>
                Hello World! I'm Nicole, a Full Stack Developer always looking for fun projects and new challenges.
                Ask Me About: going from Paralegal to Programmer, learning new technologies, and all things "The Office".
            </span>
            </Typing>
          </div>
        </div>
        <div style={{padding: '20px', borderTop: 'ridge 1px #4598BD', backgroundColor: '#efeff5', width: '100%'}}>
          <Sites />
          <Languages />
        </div>
      </div>
    )
  }
}