import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


//pages
import Saving from './pages/MySaving/Saving'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/saving",
    element: <Saving />
  },
  {
    path : "/",
    element : <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
