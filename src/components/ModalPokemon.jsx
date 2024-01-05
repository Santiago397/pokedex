import { IconX } from "@tabler/icons-react"

const ModalPokemon = ({ showModal, onCloseModal }) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 bg-green-400 h-screen transition-all duration-300 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity">
        <IconX size={34} stroke={4} />
      </button>
      {/* "absolute para salga del flujo de las cajas" */}
      <article
        className={`bg-white h-[85%] absolute w-full rounded-t-3xl text-center transition-all duration-500 ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}>
        Pokemon
      </article>
    </section>
  )
}

export default ModalPokemon
