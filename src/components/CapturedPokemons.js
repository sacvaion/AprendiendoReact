import React, { useState,useEffect } from 'react';

const CapturedPokemons = () => {
  const [pokemons] = useState([]);
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState('true');
  const arr = [];
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
        .then((response) => response.json())
        .then((data) => setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
              setPoke(arr);
          }),
        ));
    }, []);
  
     setTimeout(() => {
       setLoad(false);
       console.log(poke)
     }, 1000);

  return (
    /*<div className="pokedex">
       
      <h2>Captured Pokemons</h2>

      {pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>)}
        
    </div>*/
    <div className='CapturedPokemons'>
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
  )
}

export default CapturedPokemons;
