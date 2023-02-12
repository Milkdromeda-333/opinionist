import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { App as AppContext } from './components/context/App'
import {UserContextProvider} from "./components/context/User"
import {
  BrowserRouter 
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>
)