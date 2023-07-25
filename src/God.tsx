import { transitionTo } from "./transition"

export const God = () => {

    return (
        <div className="incomingElement">
            <h1>FIND GOD</h1>
            <img src="/public/Jesus.jpg" alt="" className="God" />
            <div className="answers">
                <button onClick={() => transitionTo(Fourth())}>
                    Be better
                </button>
            </div>
        </div>
    )
}