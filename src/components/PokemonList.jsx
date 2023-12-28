import PokemonReview from "./PokemonPreview"

const PokemonList = ({ pokemons }) => {

  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
      {
        pokemons.map((pok) => <PokemonReview pokemonURL={pok.url} key={pok.url} />)
      }
    </section>
  )
}

export default PokemonList
