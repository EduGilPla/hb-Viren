
import { End } from "./End"
import { Lose } from "./Lose"
import { transitionTo } from "./transition"

export const Fourth = () => {

    return (
        <div className="incomingElement">
            <h1>ÚLTIMA PREGUNTA</h1>
            <div className="card">
                <h3>
                    ¿Cuál de estas fotos es la original?
                </h3>
            </div>
            <div className="photoAnswers">
                <img src="/public/CloseEnoughGoodMorning.jpeg" alt="" onClick={() => transitionTo(Lose())}/>
                <img src="/public/WheresVirenGoodMorning.jpeg" alt="" onClick={() => transitionTo(Lose())}/>
                <img src="/public/CopypasteGoodMorning.jpeg" alt="" onClick={() => transitionTo(Lose())}/>
                <img src="/public/GoodGoodMorning.jpeg" alt="" onClick={() => transitionTo(End())}/>
                <img src="/public/EvenStrongerGoodMorning.jpeg" alt="" onClick={() => transitionTo(Lose())}/>
                
            </div>
        </div>
    )
}