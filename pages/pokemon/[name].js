import Image from "next/image";
//import { useState } from "react";

const Pokemon = ({ pokemon }) => {
  const pokeIndex = '000'.slice(0, -pokemon.id.toString().length) + pokemon.id

  //const [loading, setLoading] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <div>
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
            <li key={type.slot} className='p-1 mx-1 capitalize rounded-md bg-slate-200'>
              {type.type.name}
            </li>
          ))}
        </ul>

        <ul className="relative w-full p-1">
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
    </div>
  );
}

export default Pokemon;

export async function getServerSideProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
  const pokemon = await res.json()
  return {
    props: {
      pokemon
    }
  }
}