import { Hypnosis } from "./Hypnosis"
import { transitionTo } from "./transition"

export const InitialScreen = () => {

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
                <p>
                    NO HAGAS NADA
                </p>
            </div>
            <button onClick={() => transitionTo(Hypnosis())}>
                SOLO HAZ CLICK AQUÍ
            </button>
        </>
    )
}

