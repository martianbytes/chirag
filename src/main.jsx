import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import { ThemeContextProvider } from './context/ThemeContext'
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>

      <ThemeContextProvider>
        <Router />
        <Toaster position="top-right" />
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
