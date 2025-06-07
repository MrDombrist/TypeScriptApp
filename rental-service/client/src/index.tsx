import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App offers={offers} />
  </StrictMode>,
)