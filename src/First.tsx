
import { Lose } from "./Lose"
import { transitionTo } from "./transition"

export const First = () => {

    return (
        <div className="incomingElement">
            <h1>PRIMERA PREGUNTA</h1>
            <div className="card">
                <h3>
                    Si alguien (de manera posiblemente accidental) mata a 50 niños y empieza a gritar que es un extremista religioso, ¿qué haría Viren?
                </h3>
            </div>
            <button onClick={() => transitionTo(Lose())}>
                Le confrontaría físicamente
            </button>
            <button onClick={() => transitionTo(Lose())}>
                Llamaría a la polícia (poco ACAB de su parte)
            </button>
            <button onClick={() => transitionTo(First())}>
                Le diría que no es un extremista religioso, solo ha cometido una extremistareligiosidad
            </button>
        </div>
    )
}