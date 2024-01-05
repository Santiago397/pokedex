import usePokemonContext from "../hooks/usePokemonContext"
import PokemonReview from "./PokemonPreview"

const PokemonList = ({ pokemons }) => {

  const { showPokemon } = usePokemonContext()

  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
      {
        pokemons.map((pok) => (
          <PokemonReview
            key={pok.url}
            pokemonURL={pok.url}
            onClick={ showPokemon }
          />
        ))
      }
    </section>
  )
}

export default PokemonList
