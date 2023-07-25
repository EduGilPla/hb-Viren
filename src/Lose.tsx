
import { First } from "./First"
import { transitionTo } from "./transition"

export const Lose = () => {

    return (
        <div className="incomingElement">
            <h1>CAGASTE</h1>
            <div className="card">
                <h3>
                    Esperábamos más de ti Viren
                </h3>
            </div>
            <button onClick={() => transitionTo(First())}>
                Vuelve a empezar por bobo (haber hecho una bobería***)
            </button>
        </div>
    )
}