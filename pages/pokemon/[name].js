import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";

const Pokemon = ({ pokemon }) => {
  const pokeIndex = '000'.slice(0, -pokemon.id.toString().length) + pokemon.id

  //const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex flex-col items-center p-2">
        <Image
          alt={pokemon.name}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
          placeholder='blur'
          blurDataURL={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
          width={400}
          height={400}
        //onLoadingComplete={() => setLoading(false)}
        //className={`duration-300 ${loading ? 'scale-110' : 'scale-100'}`}
        />
        <h1 className='capitalize'>{pokemon.name} #{pokeIndex}</h1>

        <ul className="flex py-2">
          {pokemon.types.map((type) => (
            <li key={type.slot} className='p-1 mx-1 capitalize rounded-md bg-slate-300'>
              {type.type.name}
            </li>
          ))}
        </ul>

        <ul className="relative w-full max-w-[400px] p-1">
          {pokemon.stats.map((stat, index) => (
            <div key={index}>
              <p className="py-1 ml-1 font-semibold capitalize">{stat.stat.name}</p>
              <li className={'bg-slate-300 rounded-sm'} style={{ width: `${stat.base_stat}%` }}>
                <span className="ml-1">{stat.base_stat}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <Link href='/'>
        <a className="absolute top-0 left-0 py-1 pl-2 pr-4 font-bold tracking-widest text-gray-600 bg-slate-300 border-2 border-slate-400 rounded-br-[30px]">
          Back
        </a>
      </Link>
    </div>
  );
}

export default Pokemon;

export async function getServerSideProps(context) {
  console.log('Pokemon fetch triggered on single page')
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
  const pokemon = await res.json()
  return {
    props: {
      pokemon
    }
  }
}