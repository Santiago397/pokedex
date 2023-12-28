import { IconSearch } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import PokemonList from "./PokemonList"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const INITIAL_LIMIT = 40
const INCREASE_TO = 20

const Pokemons = () => {
  
  const api = "https://pokeapi.co/api/v2/pokemon?limit=898"

  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const targetObserver = useRef(null)

  const entry = useIntersectionObserver(targetObserver, {})
  const isVisible = !!entry?.isIntersecting

  const pokemonsByName = allPokemons.filter(pokemon => 
    pokemon.name.includes(pokemonName)
  )

  const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase())

    useEffect(() => {
      setLimit(INITIAL_LIMIT)
    }, [pokemonName])

    useEffect(() => {
      const maxPokemons = pokemonsByName.length
      if (isVisible && maxPokemons !== 0) {
        const newLimit = limit + INCREASE_TO
        newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit)
      }
    }, [isVisible])

  useEffect(() => {
    axios
      .get(api)
      .then(({ data }) => {
        setAllPokemons(data.results)
      })
      .catch((err) => console.error(err))
  }, [])
  
  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-2 flex rounded-lg">
          <input
            name="pokemonName"
            className="outline-none flex-1"
            autoComplete="off"
            type="text"
            placeholder="Search your Pokemon"
            onChange={handleChangePokemonName}  
          />
          <button type="button" className="bg-red-500 p-2 rounded-xl shadow-md shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
      <span ref={targetObserver}></span>
    </section>
  )
}

export default Pokemons

// Forma no controlada
// const handleSubmit = (e) => {
//   e.preventDefault()
//   setPokemonName(e.target.pokemonName.value.toLowerCase())
// }
