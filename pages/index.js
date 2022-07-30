import { useState, useEffect, useLayoutEffect } from 'react';
import Pokecard from '../components/Pokecard';

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon)
  const [offset, setOffset] = useState(0)

  const fetchPokemon = async (next) => {
    setOffset(next ? offset += 20 : offset -= 20)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    const nextPokemon = await res.json()
    setPokemon(nextPokemon)
  }

  return (
    <div>
      <div className='grid min-h-screen grid-cols-2 gap-2 border-[1rem] border-transparent sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-slate-300 '>
        {pokemon.results.map((pokemon, index) => <Pokecard pokemon={pokemon} key={index} />)}
      </div>

      <div className='flex justify-between gap-6'>
        <button onClick={() => fetchPokemon(false)} disabled={offset === 0} className={`bg-red-100 w-[50%] py-1 font-semibold ${offset === 0 ? 'opacity-50' : 'opacity-100'}`}>
          Previous
        </button>
        <button onClick={() => fetchPokemon(true)} className='bg-blue-100 w-[50%] py-1 font-semibold'>
          Next
        </button>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
  const initialPokemon = await res.json()

  return {
    props: {
      initialPokemon
    }
  }
}