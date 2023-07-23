import './App.css'
import { InitialScreen } from './InitialScreen'

export const App = () => {
  return (<InitialScreen />)
}

const hideAllElements = () => {
  let childNodes = document.getElementById("root")?.childNodes

  childNodes?.forEach(e => (e as Element).classList.add("begone"))
}
