import { IconX } from "@tabler/icons-react"

const ModalPokemon = ({ showModal }) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 bg-green-400 h-screen hidden ${
        showModal ? "block" : "hidden"
      }`}
    >
      <button className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity">
        <IconX size={34} stroke={4} />
      </button>
      {/* "absolute para salga del flujo de las cajas" */}
      <article className="bg-white h-[85%] absolute w-full bottom-0 rounded-t-3xl text-center">
        Pokemon
      </article>
    </section>
  )
}

export default ModalPokemon
