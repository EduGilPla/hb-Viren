import { End2 } from "./End2"
import { transitionTo } from "./transition"

export const End = () => {

    return (
        <div className="incomingElement">
            <h1>VICTORIA</h1>
            <div className="card">
                <h3>
                    Estamos muy orgullosos de ti
                </h3>
                <div className="photos">
                    <img src="/public/DaniFeliz.jpg" alt="" />
                    <img src="/public/EduFeliz.jpg" alt="" />
                </div>
                <button onClick={() => transitionTo(End2())}>
                    Continuar
                </button>
            </div>
        </div >
    )
}