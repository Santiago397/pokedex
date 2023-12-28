import { IconSearch } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./PokemonList"

const INITIAL_LIMIT = 40

const Pokemons = () => {
  
  const api = "https://pokeapi.co/api/v2/pokemon?limit=100"

  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const pokemonsByName = allPokemons.filter(pokemon => 
    pokemon.name.includes(pokemonName)
  )

  const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase())

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
          <button className="bg-red-500 p-2 rounded-xl shadow-md shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
    </section>
  )
}

export default Pokemons

// Forma no controlada
// const handleSubmit = (e) => {
//   e.preventDefault()
//   setPokemonName(e.target.pokemonName.value.toLowerCase())
// }
