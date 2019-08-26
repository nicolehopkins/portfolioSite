import React, { Component } from 'react';
import './Home.css'
import bitmoji from '../assets/bitmoji-20190824013344.png';
import Sites from './Sites';
import Typing from 'react-typing-animation';


export default class Home extends Component {

  // state = {
  //   text: 'My name is Nicole. This will be a short intro of myself. I will make it so that the text appears to type once the page loads...better known as the typewritter effect. It will be cool, just you wait.',
  //   typeSpeed: 60,
  // }


  // displayText = () => {
  //   const { text, typeSpeed } = this.state;

  //   for (let i =0; i < text.length; i++) {
  //    document.getElementById("typewritter").innerHTML += text.charAt(i);
  //     setTimeout(typeSpeed)
  //   }
  //   // setTimeout(this.displayText, typeSpeed);
  // }

  render() {
    // const { text } = this.state;

    return (
      <>
        <div>
          <span style={{ padding: '50px', fontSize: '40px' }}>Developer.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Problem-Solver.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Bug-Finder.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Camper.</span>
          <span style={{ padding: '25px', fontSize: '40px' }}>Fun Aunt.</span>
        </div>
        <div className='row'>
          <div className='col-3'>
            <img src={bitmoji} alt='bitmoji' />
          </div>
          <div className='col-7' style={{ marginTop: '150px' }}>
            <Typing>
            <span id='typewritter' className='typing' style={{ fontSize: '25px' }}>
              Hello World! I'm Nicole, a Full Stack Developer always looking for fun projects and new challenges.
              
            </span>
            </Typing>
          </div>
        </div>
        <Sites />
      </>
    )
  }
}