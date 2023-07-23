import * as ReactDOM from "react-dom";

export const transitionTo = async (next: JSX.Element) => {
    let childNodes = document.getElementById("root")?.childNodes
    childNodes?.forEach(e => (e as Element).classList.add("begone"))

    await new Promise(r => setTimeout(r, 2000));

    const root = document.getElementById("root")
    ReactDOM.render(next,root)
}