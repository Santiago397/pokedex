import { IconX } from "@tabler/icons-react"
import { colorByStat, colorByType } from "../constants/pokemon"
import Evolutions from "./Evolutions"

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen transition-all duration-300 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByType[pokemon?.types[0]]}`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity">
        <IconX size={34} stroke={4} />
      </button>
      {/* "absolute para salga del flujo de las cajas" */}
      <article
        className={`bg-white h-[85%] absolute w-full rounded-t-3xl text-center transition-all duration-500 grid ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}>
        <header
          className="absolute left-1/2 -translate-x-1/2 -translate-y-[90%] scale-[180%]"
        >
          <img
            className="pixelated"
            src={pokemon?.image}
            alt="Pokemon splash art" 
          />
        </header>
        <div className="overflow-y-auto px-4 pt-14 grid gap-2 content-start h-full hidden-scroll">
          <span className="text-slate-400 text-sm font-semibold">N° {pokemon?.id}</span>
          <h2 className="font-bold text-2xl capitalize">{pokemon?.name}</h2>
          <ul className="flex gap-2 justify-center">
            {
              pokemon?.types.map((type) => (
                <li
                  key={type}
                  className={`${colorByType[type]} px-3 py-1 rounded-md text-sm text-white`}
                  >
                    {type}
                  </li>
              ))
            }
          </ul>
          <div>
            <h4 className="font-bold capitalize">Pokedex Entry</h4>
            <p className="text-slate-400">
              {pokemon?.description}
            </p>
          </div>
          {/* Height - Weight */}
          <section className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Height</h4>
              <span className="bg-slate-100 block rounded-full p-1">{pokemon?.height} m</span>
            </div>
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Weight</h4>
              <span className="bg-slate-100 block rounded-full p-1">{pokemon?.weight} kg</span>
            </div>
          </section>
          {/* Abilities */}
          <section className="grid gap-2">
            <h4 className="font-bold capitalize">Abilities</h4>
            <ul className="grid grid-cols-2 gap-4">
                {
                  pokemon?.abilities.map((ability) => (
                    <li
                      key={ability}
                      className="bg-slate-100 block rounded-full p-1 capitalize"
                    >
                      <span>
                        {ability}
                      </span>
                    </li>    
                  ) )
                }
            </ul>
          </section>
          {/* Stats */}
          <section className="grid gap-2">
            <h4
              className="font-bold capitalize"
            >
              Stats
            </h4>
            <ul
              className="flex justify-center gap-3 flex-wrap"
            >
              {
                pokemon?.stats.map((stat) => (
                  <li
                    className={`rounded-full p-1 ${colorByStat[stat.name]}`}
                    key={stat.name}
                  >
                    <div
                      className="bg-red-500 rounded-full w-[30px] aspect-square grid place-content-center"
                    >
                      <span
                        className="font-semibold text-xs text-white"
                      >
                        {stat.name}</span>
                    </div>
                    <span
                      className="font-semibold text-sm"
                    >{stat.base_stat}</span>
                  </li>
                ))
              }
            </ul>
          </section>
          <section
            className="grid gap-2"
          >
            <h4
              className="font-bold capitalize"
            >Evolutions</h4>
            <Evolutions evolutions={pokemon?.evolutions ?? []} />
          </section>
        </div>
      </article>
    </section>
  )
}

export default ModalPokemon
