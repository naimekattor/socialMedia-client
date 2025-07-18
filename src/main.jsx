import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Router from './routes/Router'
import AuthProvider from './context/authContext/AuthContext'
import axios from "axios";


axios.defaults.baseURL = "http://localhost:5000/api"
axios.defaults.withCredentials = true;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)
