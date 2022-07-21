import Image from "next/image";
import Link from "next/link";

const Pokecard = ({ pokemon }) => {
  const pokeNumber = pokemon.url.match('/[0-9]+/').toString().replaceAll('/', '')
  const pokeIndex = '000'.slice(0, -pokeNumber.length) + pokeNumber

  return (
    <Link href={`pokemon/${pokemon.name}`} >
      <a>
        <div className="flex flex-col items-center h-full min-h-[150px] p-4 rounded-md bg-slate-100">
          <h1 className='capitalize flex items-center h-[20%]'>{pokemon.name} #{pokeIndex}</h1>

          <div className="h-[80%] w-full relative">
            <Image
              alt={pokemon.name}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
              placeholder='blur'
              blurDataURL={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              className={`duration-300 bg-no-repeat`}
            />
          </div>
        </div>
      </a>
    </Link >
  );
}

export default Pokecard;