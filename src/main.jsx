import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


//pages
import Saving from './pages/MySaving/Saving'
import App from './App'
import Adding from './pages/Income Expense feature/Addind income and expense/Adding'
import Debt from './pages/Debt/Debt'
import ProfileC from './pages/Profile/Profile'
import Home from './pages/home/home'
import History from './pages/Income Expense feature/history/History'

//css
import './styles/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/saving",
    element: <Saving />
  },
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/create",
    element : <Adding />
  },
  {
    path : "/debt",
    element : <Debt />
  },
  {
    path : "/profile",
    element : <ProfileC />
  },
  {
    path : "/history",
    element : <History />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
