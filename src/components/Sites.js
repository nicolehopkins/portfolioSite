import React, { Component } from 'react';
import cookWithMe from '../assets/homePreview.gif';
import styleBox from '../assets/styleBox.gif';
import pokedex from '../assets/pokedex.gif';


export default class Sites extends Component {

  state = {
    sites: [
      {
        name: cookWithMe,
        url: 'https://tocookwithme.com/#/',
        alt: 'cookWithMe app',
      },
      {
        name: styleBox,
        url: 'https://github.com/nicolehopkins/StyleBox/tree/master/frontend',
        alt: 'styleBox app',
      },
      {
        name: pokedex,
        url: 'https://github.com/nicolehopkins/pokedex-react',
        alt: 'pokedex app',
      },
    ]
  }

  render() {
    const { sites } = this.state;

    return (
      <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col' style={{ textAlign: 'center', padding: '50px' }}>
              <h2>Check out some of my latest work and contributions:</h2>
            </div>
          </div>
          <div className='row'>
            {
              sites.map((e, i) => {
                return (
                  <div className='col-4' key={i} >
                    <a href={e.url} target='_blank' rel='noopener noreferrer' >
                      <img src={e.name} alt={e.alt} style={{ height: '250px', width: '400px', border: 'solid 1px grey', marginBottom: '30px' }} />
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }

}