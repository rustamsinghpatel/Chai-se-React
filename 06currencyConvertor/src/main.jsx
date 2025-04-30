import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';  // Ya './main.css' agar aapne file ka naam change kiya ho

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
