import { FirstTrial } from "./FirstTrial"
import { transitionTo } from "./transition"

export const SecondTrial = () => {
  return (
    <>
      <div className="incomingElement">
        <h1>Holaaaaa pero 2</h1>
        <button onClick={() => transitionTo(FirstTrial())}>
            Empezar
        </button>
      </div>
    </>
  )
}