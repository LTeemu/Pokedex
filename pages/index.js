import { useState } from 'react';
import Pokecard from '../components/Pokecard';

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon)

  return (
    <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {pokemon.results.map((pokemon, index) => <Pokecard pokemon={pokemon} key={index} />)}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  const initialPokemon = await res.json()

  return {
    props: {
      initialPokemon
    }
  }
}