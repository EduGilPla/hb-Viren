import { SecondTrial } from "./SecondTrial"
import { transitionTo } from "./transition"

export const FirstTrial = () => {
  return (
    <>
      <div className="incomingElement">
        <h1>Holaaaaa</h1>
        <button onClick={() => transitionTo(SecondTrial())}>
            Empezar
        </button>
      </div>
    </>
  )
}