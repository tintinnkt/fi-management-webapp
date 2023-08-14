import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Saving from './pages/MySaving/Saving'
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
import Login from './pages/login/login'
import RestrictedPage from './components/restricted/restrictedpage'

const AuthContext = createContext();

function App() {
  const [ auth, setAuth ] = useState(false);


  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element=  {<RestrictedPage><Home     /></RestrictedPage>} />
          <Route path="/saving" element=  {<RestrictedPage><Saving   /></RestrictedPage>} />
          <Route path="/create" element=  {<RestrictedPage><Adding   /></RestrictedPage>} />
          <Route path="/debt"     element={<RestrictedPage><Debt     /></RestrictedPage>} />
          <Route path="/profile"  element={<RestrictedPage><ProfileC logOut={() => {
              if(!auth) return;
              else setAuth(false);
            }} /></RestrictedPage>} />
          <Route path="/history"  element={<RestrictedPage><History  /></RestrictedPage>} />
          <Route path="/login"    element={<Login 
            responseGoogleSuccess={() => {
              if(auth) return;
              else setAuth(true);
            }}

            

            />
        } 
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export {AuthContext};
export default App;
