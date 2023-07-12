import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//components
import Mybutton from './components/Mybutton.jsx'
import Topic from './components/topic/topic'

//styles
// import './App.css'
import './styles/fonts.css'



function App() {
  
 
  return (
    <>
      <Topic text="Login" />
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Mybutton name={"Oneal"}/>
        <Mybutton name={"Hok"}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    
      <a href=""><button>Login Tintin</button></a>
    </>
  )
}

export default App
