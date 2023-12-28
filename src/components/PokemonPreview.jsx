import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { colorByType } from "../constants/pokemon"
import { PokemonContext } from "../context/PokemonContext"

const PokemonReview = ({ pokemonURL }) => {

  const { showPokemonById } = useContext(PokemonContext)
  const [pokemon, setPokemon] = useState(null)
  
  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => {
        setPokemon(data)
      })
      .catch(err => console.error(err))
  }, [])
  
  return (
    <article
      onClick={() => showPokemonById(pokemon?.id)}
      className="text-center bg-white rounded-3xl relative font-semibold capitalize pb-2 shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-slate-400 cursor-pointer group grid gap-2">
      <header className="h-10">
        <img
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated" 
          src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
      </header>
      <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
      <h4 className="text-lg">{pokemon?.name}</h4>
      <ul className="flex gap-2 justify-center">
        {
          pokemon?.types.map(({ type }) => (
            <li className={`${colorByType[type.name]} px-3 py-1 rounded-md text-sm text-white`} key={type.name}>{type.name}</li>
          ))
        }
      </ul>
    </article>
  )
}

export default PokemonReview
