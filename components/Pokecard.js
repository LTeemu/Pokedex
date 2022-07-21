import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";

const Pokecard = ({ pokemon }) => {
  const pokeNumber = pokemon.url.match('/[0-9]+/').toString().replaceAll('/', '')
  const pokeIndex = '000'.slice(0, -pokeNumber.length) + pokeNumber

  //const [loading, setLoading] = useState(true)

  return (
    <Link href={`pokemon/${pokemon.name}`} >
      <a>
        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-slate-100">
          <Image
            alt={pokemon.name}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
            placeholder='blur'
            blurDataURL={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
            width={150}
            height={150}
          //onLoadingComplete={() => setLoading(false)}
          //className={`duration-300 ${loading ? 'scale-110' : 'scale-100'}`}
          />
          <h1 className='capitalize'>{pokemon.name} #{pokeIndex}</h1>
        </div>
      </a>
    </Link >
  );
}

export default Pokecard;