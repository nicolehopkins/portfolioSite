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
        <div style={{ padding: '20px', borderTop: 'ridge 1px #4598BD', backgroundColor: '#efeff5', width: '100%' }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Check out some of my past projects</h2>
          </div>
          <div>
            {
              sites.map((e, i) => {
                return (
                  <a href={e.url} style={{ padding: '20px' }} target='_blank' rel='noopener noreferrer' >
                    <img src={e.name} alt={e.alt} style={{ height: '250px', width: '400px', border: 'solid 1px grey', marginBottom: '30px' }} />
                  </a>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }

}