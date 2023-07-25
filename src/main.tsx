import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InitialScreen } from './InitialScreen'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InitialScreen />
  </StrictMode>,
)
