import React, { useState, useEffect } from 'react';
import hoist from 'hoist-non-react-statics';
import { useAppClient } from '../../../../lib/AppProvider';

export function withPokemonCard(Component) {
  function WithPokemonCard({ pokemon, ...props }) {
    const client = useAppClient();
    const [pokemonDetail, setPokemonDetail] = useState();
    useEffect(() => {
      const fetchPokemonDetail = async () => {
        const data = await client.getPokemonDetail(pokemon?.url.split('/')[6]);
        setPokemonDetail(data);
      };

      fetchPokemonDetail();
    }, [client, pokemon]);

    const pageProps = { pokemonDetail };
    return <Component {...props} {...pageProps} />;
  }

  hoist(WithPokemonCard, Component);
  WithPokemonCard.displayName = `withShowPokemon(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithPokemonCard;
}
