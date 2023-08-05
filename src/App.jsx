import React from 'react'
import { Link } from 'react-router-dom'

//components
// import Mybutton from './components/Mybutton.jsx'
// import Topic from './components/topic/topic'
import Login from './pages/login/login'

//styles
// import './App.css'
import './styles/fonts.css'
import Topic from './components/topic/topic'
import NavigationBar from './components/navbar/nav'



function App() {


  return (
    <>
      <Topic text="App" />
      <NavigationBar />
    </>
  )
}

export default App
