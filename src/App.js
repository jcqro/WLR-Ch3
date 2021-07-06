import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";
import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */
  const [pokename, setPokename] = useState("");
  const handleOnChange = (event) => {
    setPokename(event.target.value);
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        value={pokename}
        placeholder="type pokemon name"
        onChange={handleOnChange}
      />
      <div className="cards">
        {pokemons
          .filter((pokemon) => pokemon.name === pokename.toLowerCase().trim())
          .map((pokemon) => (
            <section>
              <CardItem name={pokemon.name} sprite={pokemon.sprite} />
            </section>
          ))}
      </div>
    </div>
  );
}
