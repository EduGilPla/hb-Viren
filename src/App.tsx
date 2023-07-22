import './App.css'

function App() {

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

function hideAllElements() {
  let childNodes = document.getElementById("root").childNodes

  childNodes.forEach(e => e.classList.add("begone"))
}

export default App
