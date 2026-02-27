import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import './i18n'
import App from './App.tsx'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Élément #root introuvable dans le DOM.')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
