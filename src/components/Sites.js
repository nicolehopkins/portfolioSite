import React from 'react';
import cookWithMeGif from '../assets/homePreview.gif';


const Sites = (props) => {

  return (
    <>
      <div style={{padding: '50px', borderTop: 'outset #4598BD'}}>
        <div style={{ textAlign: 'center'}}>
          <h2>Sites I've worked on</h2>
        </div>
        <div>
          <h3>Cook With Me</h3>
          <a href='https://tocookwithme.com/#/' target='_blank' rel='noopener noreferrer'>
            <img src={cookWithMeGif} alt='cooking app' style={{ height: '250px', width: '400px' }} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sites;