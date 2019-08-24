import React, { Component } from 'react';
import bitmoji from '../assets/bitmoji-20190824013344.png'


export default class Home extends Component {

  state = {
    descriptiveWords: ['Developer', 'Camper', 'Friend', 'Bug Finder',
      'Aunt', 'Writer', 'Problem-Solver', 'Sister', 'Lover of Music', 'Human.']
  }


  // displayWords = () => {
  //   const { descriptiveWords } = this.state;
  //   for (let i = 0; i< descriptiveWords.length; i++) {
      
  //   }
  // }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
        <span style={{padding: '50px', fontSize: '40px'}}>Developer.</span>
            <span style={{padding: '25px', fontSize: '40px'}}>Problem-Solver.</span>
            <span style={{padding: '25px', fontSize: '40px'}}>Bug-Finder.</span>
            <span style={{padding: '25px', fontSize: '40px'}}>Camper.</span>
            <span style={{padding: '25px', fontSize: '40px'}}>Fun Aunt.</span>
        </div>
        <div className='row'>
          <div className='col-3'>
            <img src={bitmoji} alt='bitmoji' />
          </div>
          <div className='col-7' style={{marginTop: '150px'}}>
            <span style={{fontSize: '25px'}}>My name is Nicole. This will be a short intro of myself. I will make 
              it so that the text appears to type once the page loads...better known as the typewritter effect. 
              It will be cool, just you wait.</span>
          </div>
        </div>
      </>
    )
  }
}