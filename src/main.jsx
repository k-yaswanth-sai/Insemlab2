import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OTPVerification from './OTPVerification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OTPVerification />
  </StrictMode>,
)