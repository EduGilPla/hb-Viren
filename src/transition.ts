import { createRoot } from "react-dom/client";

export const transitionTo = async (next: JSX.Element) => {
    const childNodes = document.getElementById("root")?.childNodes
    childNodes?.forEach(e => (e as Element).classList.add("begone"))

    await new Promise(r => setTimeout(r, 500));
    createRoot(document.getElementById('root')!).render(next);

    await new Promise(r => setTimeout(r, 200));

    const incomingElement = document.getElementsByClassName("incomingElement")[0];
    incomingElement.classList.remove("incomingElement");
}