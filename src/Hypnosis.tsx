
import { First } from "./First"
import { transitionTo } from "./transition"

export const Hypnosis = () => {

    return (
        <div className="incomingElement">
            <h1>¡Hipnotízate!</h1>
            <div className="card">
                <h3>
                    ¡No sabes y nunca has sabido nada de informática!
                </h3>
            </div>
            <img src="Hypnosis.gif" height="300em" />
            <div className="secondaryCard">
                <p>
                    Es en serio, por favor no mires el código. Hemos tenido que cometer 25 crímenes de Guerra en Yugoslavia para hacer esta página
                </p>
            </div>
            <button onClick={() => transitionTo(First())}>
                Me comprometo a actuar como Viren (modelo de pasarela's version)
            </button>
        </div>
    )
}