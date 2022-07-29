import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {


  const[name, setName] = useState("")
  const[hp, setHp] =  useState("")

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleHpChange(e) {
    setHp(e.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");

          const newPokemon = {
            "id": 1,
            "name": name,
            "hp": hp,
            "sprites": {
              "front": "",
              "back": ""
            }
          }

          addPokemon(newPokemon)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleNameChange} fluid label="Name" placeholder="Name" name="name" value={name}/>
          <Form.Input onChange={handleHpChange} fluid label="hp" placeholder="hp" name="hp" value={hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
