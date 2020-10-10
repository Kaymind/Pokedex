import React, { useState, useEffect } from 'react';
import hoist from 'hoist-non-react-statics';
import { useAppClient } from '../../../lib/AppProvider';
import { useQueryParams } from '../../../lib/hooks';

export function withShowPokemon(Component) {
  function WithShowPokemon(props) {
    const client = useAppClient();
    const [query, setQuery] = useQueryParams();

    const [search, setSearch] = useState(query.q ?? '');
    const [pokemonData, setPokemonData] = useState([]);
    const checkedValue = parseInt(query['filter'], 10) || 10;
    const q = query['q'] || '';

    useEffect(() => {
      const fetchAllPokemon = async () => {
        const data = await client.getAllPokemon(checkedValue);
        setPokemonData(data);
      };

      fetchAllPokemon();
    }, [client, checkedValue]);

    useEffect(() => {
      setQuery({ q: search });
    }, [search, setQuery]);

    const pageProps = {
      pokemonData,
      checkedValue,
      setQuery,
      search,
      setSearch,
      query: q,
    };

    return <Component {...props} {...pageProps} />;
  }

  hoist(WithShowPokemon, Component);

  WithShowPokemon.displayName = `withShowPokemon(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;
  return WithShowPokemon;
}
