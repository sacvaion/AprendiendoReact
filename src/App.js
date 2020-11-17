import logo from './assets/images/logo.svg';
import React, { useEffect } from 'react';
import './assets/css/App.css';
//importar componentes
import MiComponente from './components/MiComponente';
import PokemonsList from './components/PokemonsList';
import Pokedex from './components/CapturedPokemons';
import { useContext } from 'react';
import { PokemonContext } from './components/PokemonContext';
import { useState } from 'react';
function App() {

  const [pokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ]);
  

  


  return (
    /*<div className="App">
       <div className='pokegallery'>
        { load ? (
          <p>Loading...</p>
        ) : (

          poke.map((img, i) => (
            <div id={img.id} key={img.id}>

              <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                <img  src={img.sprites.front_default} alt='pokemon' />
                <div >
                  <h5 >{img.name}</h5>
                  <h6>type: {img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>*/
    <div className="App">
        <div className="App">
          <PokemonsList />
          <Pokedex />
        </div>
    </div>
  );
}

export default App;
