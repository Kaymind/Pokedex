import React from 'react';
import styled from 'styled-components';

function PokemonCard({ className, pokemonDetail, ...props }) {
  return (
    <div className={className}>
      <div className='img-wrapper'>
        <img
          src={pokemonDetail?.sprites.back_default}
          alt={`pokemon-${pokemonDetail?.name}`}
        />
      </div>
      <div className='details'>
        <span className='name'>{pokemonDetail?.name}</span>
        <ul className='abilities'>
          {pokemonDetail?.abilities.map((ab) => (
            <li key={ab.ability.name}>{ab.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const StyledPokemonCard = styled(PokemonCard)`
  height: fit-content;
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  border-radius: 6px;

  &:hover {
    background: #ddd;
    cursor: pointer;
  }

  .img-wrapper {
    width: 100px;
    height: 100px;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    display: flex;
    flex-direction: column;

    .name {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .abilities {
      font-size: 0.8rem
      padding: 0;
      margin: 8px;
    }
  }
`;

export { StyledPokemonCard as PokemonCard };
