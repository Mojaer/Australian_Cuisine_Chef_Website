import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './AuhProvider/AuthProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes.jsx'
import '@smastrom/react-rating/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
