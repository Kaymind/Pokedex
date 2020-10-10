import { withShowPokemon } from './withShowPokemon';
import { ShowPokemon } from './ShowPokemon';

const ConnectedShowPokemon = withShowPokemon(ShowPokemon);

export { ConnectedShowPokemon as ShowPokemon };
