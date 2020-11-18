import React, { useState,useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const CapturedPokemons = () => {
  const [pokemons] = useState([]);
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState('true');
  const arr = [];
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=3')
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
              <Card style= {{ width: '15rem' }} >
                <CardImg src={img.sprites.front_default}  style={{ width: '15rem', height: '15rem', backgroundColor: '#F0F0C9'}}/>
                <CardBody>
                  <CardTitle tag="h5">{img.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">type: {img.types[0].type.name}</CardSubtitle>
                  <CardText>----</CardText>
                </CardBody>
              </Card>
        </div>
      ))
    )}
  </div>
  )
}

export default CapturedPokemons;
