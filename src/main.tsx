import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AppContextProvider } from './contexts/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
    <App />
    </AppContextProvider>
  </React.StrictMode>,
)
