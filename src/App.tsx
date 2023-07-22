import './App.css'

export const App = () => {

  return (
    <>
      <h1>¡Hola Víren!</h1>
      <div className="card">
        <h3>
          ¡Esta es nuestra felicitación por tu cumpleaños!
        </h3>
      </div>
      <div className="secondaryCard">
        <p>
          Pero vas a tener que resolver unos acertijos para llegar hasta ella...
        </p>
      </div>
      <p className="read-the-docs">
        (No seas tramposo, no vale usar el F12)
      </p>
      <button onClick={hideAllElements}>
        Empezar
      </button>
    </>
  )
}

const hideAllElements = () => {
  let childNodes = document.getElementById("root")?.childNodes

  childNodes?.forEach(e => e.classList.add("begone"))
}
