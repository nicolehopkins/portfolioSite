import React from 'react';
import cookWithMeGif from '../assets/homePreview.gif';
import styleBox from '../assets/styleBox.gif';
import pokedex from '../assets/pokedex.gif';


const Sites = (props) => {

  return (
    <>
      <div style={{padding: '20px', borderTop: 'ridge 1px #4598BD', backgroundColor: '#efeff5', width: '100%'}}>
        <div style={{ textAlign: 'center', padding: '20px'}}>
          <h2>See some of my work</h2>
        </div>
        <div>
          <a href='https://tocookwithme.com/#/' style={{padding: '20px'}} target='_blank' rel='noopener noreferrer' >
            <img src={cookWithMeGif} alt='cooking app' style={{ height: '250px', width: '400px', border: 'solid 1px grey' }} />
          </a>
          <a href='https://github.com/nicolehopkins/StyleBox/tree/master/frontend' style={{padding: '20px'}} target='_blank' rel='noopener noreferrer'>
            <img src={styleBox} alt='stylebox app' style={{ height: '250px', width: '400px', border: 'solid 1px grey' }} />
          </a>
          <a href='https://github.com/nicolehopkins/pokedex-react' style={{padding: '20px'}} target='_blank' rel='noopener noreferrer'>
            <img src={pokedex} alt='pokedex app' style={{ height: '250px', width: '400px', border: 'solid 1px grey' }} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sites;