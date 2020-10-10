import React from 'react';
import styled from 'styled-components';

import { PokemonCard } from '../components/PokemonCard/';

const StyledShowPokemon = styled(function ShowPokemon({
  className,
  pokemonData,
  checkedValue,
  setQuery,
  search,
  setSearch,
  query,
  ...props
}) {
  return (
    <div className={className}>
      <label htmlFor='search'>
        Search:{' '}
        <input
          id='search'
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div>
        <label htmlFor='ten'>
          10
          <input
            type='radio'
            id='ten'
            value={checkedValue}
            checked={checkedValue === 10}
            onChange={() => setQuery({ filter: 10 })}
          />
        </label>
        <label htmlFor='fifhty'>
          50
          <input
            type='radio'
            id='fifhty'
            value={checkedValue}
            checked={checkedValue === 50}
            onChange={() => setQuery({ filter: 50 })}
          />
        </label>
        <label htmlFor='hundred'>
          100
          <input
            type='radio'
            id='hundred'
            value={checkedValue}
            checked={checkedValue === 100}
            onChange={() => setQuery({ filter: 100 })}
          />
        </label>
      </div>
      <div className='pokemon-table'>
        {pokemonData
          .filter((pk) => pk.name.includes(query))
          .map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
})`
  min-height: 100vh;
  width: 100%;
  padding: 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pokemon-table {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-gap: 20px;
  }
`;

export { StyledShowPokemon as ShowPokemon };
