import axios from "axios"

const api = "https://pokeapi.co/api/v2/pokemon/"

const getEvolutionsData = (evolutions) => {
  return evolutions.map(
    async (evolution) =>
      await axios.get(`${api}${evolution.name}`)
  )
}

export {
  getEvolutionsData
}
