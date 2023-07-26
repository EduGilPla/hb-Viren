
import { Fourth } from "./Fourth"
import { Lose } from "./Lose"
import { Third } from "./Third"
import { transitionTo } from "./transition"

export const Second = () => {

    return (
        <div className="incomingElement">
            <h1>SEGUNDA PREGUNTA</h1>
            <div className="card">
                <h3>
                    ¿Cuál fue el día en el que Viren quedó con el amor de tu vida (Eduardo Gil Plasencia) por primera vez?
                </h3>
            </div>
            <div className="answers">
                <button onClick={() => transitionTo(Lose())}>
                    Who
                </button>
                <button onClick={() => transitionTo(Lose())}>
                    16/09/2023
                </button>
                <button onClick={() => transitionTo(Fourth())}>
                    16/09/2022
                </button>
                <button onClick={() => transitionTo(Lose())}>
                    10/05/2022
                </button>
            </div>
        </div>
    )
}