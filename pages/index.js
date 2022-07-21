import { useState, useEffect } from 'react';
import Pokecard from '../components/Pokecard';

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon)

  useEffect(() => {
    console.log("Pokemon changed: " + JSON.stringify(pokemon))
  }, [pokemon])


  return (
    <div className='grid min-h-screen grid-cols-2 gap-2 border-[1rem] border-transparent sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-slate-300 '>
      {pokemon.results.map((pokemon, index) => <Pokecard pokemon={pokemon} key={index} />)}
    </div>
  )
}

export async function getStaticProps(context) {
  console.log('Pokemon fetch triggered')
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  const initialPokemon = await res.json()

  return {
    props: {
      initialPokemon
    }
  }
}