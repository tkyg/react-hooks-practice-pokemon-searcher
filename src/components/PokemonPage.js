import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [allPokemon, setAllPokemon] = useState([])
const [filteredPokemon, setFilteredPokemon] = useState(allPokemon)

function addPokemon(newPokemon){

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPokemon)
  }
  fetch("http://localhost:3001/pokemon", options)
    .then(res => res.json())
    .then(data => console.log(data))

  setAllPokemon([...allPokemon, newPokemon])
}

function handleSearchChange(e){
  const filteredPokes = allPokemon.filter(poke => {
    return poke.name.includes(e.target.value)
  })
  setFilteredPokemon(filteredPokes)
}

useEffect(() => {
  setFilteredPokemon(allPokemon)
}, [allPokemon])

useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then(res => res.json())
  .then(data => setAllPokemon(data))
}, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search handleSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection allPokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
