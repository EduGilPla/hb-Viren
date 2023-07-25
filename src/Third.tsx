
import { God } from "./God"
import { Liar } from "./Liar"
import { transitionTo } from "./transition"

export const Third = () => {

    return (
        <div className="incomingElement">
            <h1>TERCERA PREGUNTA</h1>
            <div className="card">
                <h3>
                    ¿Ha cometido Viren actos impuros mientras se miraba a sí mismo en el espejo?
                </h3>
            </div>
            <div className="answers">
                <button onClick={() => transitionTo(God())}>
                    Sí
                </button>
                <button onClick={() => transitionTo(Liar())}>
                    No
                </button>
            </div>
        </div>
    )
}