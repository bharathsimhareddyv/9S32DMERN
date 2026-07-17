import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvide } from './Context/Varibale.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvide>
       <App />
    </GlobalProvide>
  </StrictMode>,
)
