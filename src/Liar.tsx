import { God } from "./God"
import { transitionTo } from "./transition"

export const Liar = () => {

    return (
        <div className="incomingElement">
            <h1>Dios sabe que mientes, elige la de verdad: </h1>
            <div className="answers">
                <button onClick={() => transitionTo(God())}>
                    Sí y me arrepiento de haber mentido
                </button>
            </div>
        </div>
    )
}