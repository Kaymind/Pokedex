import { withPokemonCard } from './withPokemonCard';
import { PokemonCard } from './PokemonCard';

const ConnectedPokemonCard = withPokemonCard(PokemonCard);

export { ConnectedPokemonCard as PokemonCard };
