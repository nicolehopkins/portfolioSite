import React, { Component } from 'react';
import HTML from '../assets/html.svg';
import CSS from '../assets/css3.svg';
import JS from '../assets/javascript.png';


export default class Languages extends Component {

  render() {
    return (
      <div className='row' >
        <img src={JS} alt='JavaScript icon'  style={{width: '170px', height: 'auto'}}/>
        <img src={HTML} alt='HTML icon' style={{width: '200px', height: 'auto'}} />
        <img src={CSS} alt='HTML icon'  style={{width: '130px', height: 'auto'}}/>
      </div>
    )
  }
}

