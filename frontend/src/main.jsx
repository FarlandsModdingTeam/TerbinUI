import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import './index.css'
import '../../bootstrap/css/bootstrap.css'
import '../../bootstrap/js/bootstrap.bundle.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
