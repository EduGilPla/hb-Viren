
import { transitionTo } from "./transition"

export const Hypnosis = () => {

    return (
        <>
            <h1>¡Hipnotízate!</h1>
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
            <button onClick={() => transitionTo()}>
                Empezar
            </button>
        </>
    )
}